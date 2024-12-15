const { expect } = require('@playwright/test');

class LoginPage {
    
    constructor(page)
    {
        this.page = page;
        this.userEmail = page.locator("[id='email']");
        this.userPassword = page.locator("[id='password']");
        this.loginBtn = page.locator("[type='submit'][value = 'Login']");
        this.loginTitle = page.locator('h1[data-test="login-title"]');
        this.invalidLoginMessage = page.locator('[data-test="login-error"]');
    }

    async goToLoginPage()
    {
        await this.page.goto('/auth/login');
        await this.page.waitForLoadState('networkidle'); 
    }

    async fillLoginDetails(username, password)
    {
        await this.userEmail.fill(username);
        await this.userPassword.fill(password);
    }

    async clickOnLoginBtn()
    {
        await this.loginBtn.click();
    }

    async validateLoginPageTitle() {
        await expect(this.page).toHaveTitle(/Login - Practice Software Testing/);
    }

    async invalidEmailorPassword() {
        await expect(this.invalidLoginMessage).toBeVisible();
    }
}
module.exports = {LoginPage};