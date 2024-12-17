const { test, expect } = require("@playwright/test");
const { LoginPage } = require('../pageobjects/LoginPage');
const { environments, PERMISSIONS } = require("../utils/roles");
const { MyAccountPage } = require("../pageobjects/MyAccountPage");
const { HomePage } = require("../pageobjects/HomePage");
const { HandToolsPage } = require("../pageobjects/HandToolsPage");
const { PowerToolsPage } = require("../pageobjects/PowerToolsPage");
const { OtherPage } = require("../pageobjects/OtherPage");
const { SpecialToolsPage } = require("../pageobjects/SpecialToolsPage");

const currentEnvironment = process.env.ENV || 'qa';
const userCredentials = environments[currentEnvironment].normal_user;
const roles = environments[currentEnvironment];

let loginPage;
let myAccountPage;
let homePage;
let handToolsPage;
let powerToolsPage;
let otherPage;
let specialToolsPage;

test.describe('TC_03 - Navigation Links', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.validateLoginPageTitle();
        await loginPage.fillLoginDetails(userCredentials.email, userCredentials.password);
        await loginPage.clickOnLoginBtn();

        myAccountPage = new MyAccountPage(page);
        await myAccountPage.validateMyAccountPageTitle();
        await myAccountPage.isMyAccountTextViseble();
        await myAccountPage.clickOnHomeBtn();

        homePage = new HomePage(page);
        await homePage.validateHomePageTitle();
        await homePage.clickOnCategoriesDropDownBtn();

    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    //Test for check if the navigation to Hand tools link work properly
    test('should navigate to Hand Tools Page', async ({ page }) => {
        await homePage.clickOnHandTools();

        handToolsPage = new HandToolsPage(page);
        await handToolsPage.validateHandToolsPageTitle();
    });

    //Test for check if the navigation to Power tools link work properly
    test('should navigate to Power Tools Page', async ({ page }) => {
        await homePage.clickOnPowerTools();

        powerToolsPage = new PowerToolsPage(page);
        await powerToolsPage.validatePowerToolsPageTitle();
    });

    //Test for check if the navigation to "Other" link work properly
    test('should navigate to Other Page', async ({ page }) => {
        await homePage.clickOnOthers();

        otherPage = new OtherPage(page);
        await otherPage.validateOtherPageTitle();
    });
});

test.describe('TC_03 Navigation Links with PERMISSION', () => {
    Object.entries(roles).forEach(([roleName, roleData]) => {

        test.beforeEach(async ({ page }) => {
            loginPage = new LoginPage(page);
            await loginPage.goToLoginPage();
            await loginPage.validateLoginPageTitle();
        });

        test.afterEach(async ({ page }) => {
            await page.close();
        });

        // -> Verify if user have PERMISSION for the current page.  
        test(`should verify if ${roleName} have Special Tools Page PERMISSION`, async ({ page }) => {
            await loginPage.fillLoginDetails(roleData.email, roleData.password);
            await loginPage.clickOnLoginBtn();

            myAccountPage = new MyAccountPage(page);
            await myAccountPage.validateMyAccountPageTitle();
            await myAccountPage.isMyAccountTextViseble();
            await myAccountPage.clickOnHomeBtn();

            homePage = new HomePage(page);
            await homePage.validateHomePageTitle();
            await homePage.clickOnCategoriesDropDownBtn();
            await homePage.clickOnSpecialTools();

            specialToolsPage = new SpecialToolsPage(page);
            await specialToolsPage.validateSpecialToolsPageTitle();

            if (roleData.permissions.includes(PERMISSIONS.SPECIAL_TOOLS)) {
                console.log(`-------------------------------------------------------------------------`);
                console.log(`${roleName} have PERMISSION to access Special Tools Page.`);
                console.log(`-------------------------------------------------------------------------`);

                await specialToolsPage.validateSpecialToolsPageHeader();

            } else {
                console.log(`-------------------------------------------------------------------`);
                console.log(`${roleName} DON'T have PERMISSION to access Special Tools Page.`);
                console.log(`-------------------------------------------------------------------`);

                await specialToolsPage.SpecialToolsPageHeaderShouldBeHidden();
            }
        });
    });
});

