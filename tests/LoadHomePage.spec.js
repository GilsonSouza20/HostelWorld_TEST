const { test, expect } = require("@playwright/test");
const { LoginPage } = require('../pageobjects/LoginPage');
const { environments, PERMISSIONS } = require("../utils/roles");
const { MyAccountPage } = require("../pageobjects/MyAccountPage");



let loginPage;
let myAccountPage;

test.describe('TC_02 - Home Page Functionalities', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.validateLoginPageTitle();
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    // Test for Sort field  
    test('should display the Sort field', async ({ page }) => {
        await loginPage.fillLoginDetails(email, password);
        await loginPage.clickOnLoginBtn();

        myAccountPage = new MyAccountPage(page);
        await myAccountPage.validateMyAccountPageTitle();
        await myAccountPage.isMyAccountTextViseble();
    });

    // Test for Price Range field
    test('should display the Price Range field and filter items by price', async ({ page }) => {
        // Adicione os passos do teste aqui
    });

    // Test for Search field
    test('should allow users to search items using the Search field', async ({ page }) => {
        // Adicione os passos do teste aqui
    });

    // Test for Category filter
    test('should filter items correctly using the Category field', async ({ page }) => {
        // Adicione os passos do teste aqui
    });

});



