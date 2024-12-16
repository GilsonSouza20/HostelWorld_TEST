const { test, expect } = require("@playwright/test");
const { LoginPage } = require('../pageobjects/LoginPage');
const { environments, PERMISSIONS } = require("../utils/roles");
const { MyAccountPage } = require("../pageobjects/MyAccountPage");
const { HomePage } = require("../pageobjects/HomePage");

const currentEnvironment = process.env.ENV || 'qa';
const userCredentials = environments[currentEnvironment].normal_user;

let loginPage;
let myAccountPage;
let homePage;

test.describe('TC_03 - Navigation Links', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.validateLoginPageTitle();

    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    //Test for check if the navigation links work properly
    test('should navigate links from HomePage', async ({ page }) => {
        await loginPage.fillLoginDetails(userCredentials.email, userCredentials.password);
        await loginPage.clickOnLoginBtn();

        myAccountPage = new MyAccountPage(page);
        await myAccountPage.validateMyAccountPageTitle();
        await myAccountPage.isMyAccountTextViseble();
        await myAccountPage.clickOnHomeBtn();

        homePage = new HomePage(page);
        await homePage.validateHomePageTitle();
        await homePage.clickOnCategoriesDropDownBtn();
        await homePage.clickOnHandTools();
        
    });
});



