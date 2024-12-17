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
let searchString = "hammer";

test.describe('TC_05 - Search Functionality', () => {

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
        //await page.close();
    });

    //Test for check if the Search functionality works properly
    test('should be able to search', async ({ page }) => {
        
        homePage = new HomePage(page);
        await homePage.validateHomePageTitle();
        await homePage.isHomePageSearchViseble();
        await homePage.searchProduct(searchString)
        await homePage.clickSearchProduct();
        await homePage.verifySearchResult(searchString);
        await page.pause();
    });
});



