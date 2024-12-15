const { test, expect } = require("@playwright/test");
const { LoginPage } = require('../pageobjects/LoginPage');
const { environments, PERMISSIONS } = require("../utils/roles");
const { MyAccountPage } = require("../pageobjects/MyAccountPage");

const currentEnvironment = process.env.ENV || 'qa';
const roles = environments[currentEnvironment];

const wrongEmail = 'wrongemail@hostel.com';
const wrongPassword = '1234567';

let loginPage;
let myAccountPage;

test.describe('TC_01 Login Tests', () => {
    Object.entries(roles).forEach(([roleName, roleData]) => {

        test.beforeEach(async ({ page }) => {
            loginPage = new LoginPage(page);
            await loginPage.goToLoginPage();
            await loginPage.validateLoginPageTitle();
        });

        test.afterEach(async ({ page }) => {
            await page.close();
        });

        // -> Success case: Login  
        test(`should allow ${roleName} to log in`, async ({ page }) => {
            await loginPage.fillLoginDetails(roleData.email, roleData.password);
            await loginPage.clickOnLoginBtn();

            myAccountPage = new MyAccountPage(page);
            await myAccountPage.validateMyAccountPageTitle();
            await myAccountPage.isMyAccountTextViseble();
        });

        // -> Failure case: Get login error when email is wrong 
        test(`Login Failure for ${roleName} with wrong email`, async ({ page }) => {
            await loginPage.fillLoginDetails(wrongEmail, roleData.password);
            await loginPage.clickOnLoginBtn();
            await loginPage.invalidEmailorPassword();
        });

        // -> Failure case: Get login error when password is wrong 
        test(`Login Failure for ${roleName} with wrong password`, async ({ page }) => {
            await loginPage.fillLoginDetails(roleData.email, wrongPassword);
            await loginPage.clickOnLoginBtn();
            await loginPage.invalidEmailorPassword();
        });
    });
});



