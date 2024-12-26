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

test.describe('TC_06 - Verify Lenguages', () => {

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

    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    //Test for check French Language
    test('Verify If The Language Is Changed', async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.validateHomePageTitle();
        await homePage.clickBtnLanguages();
        await homePage.selectLanguage();
        await homePage.checkLanguage();
    });
});

