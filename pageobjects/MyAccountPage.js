const { expect } = require('@playwright/test');

class MyAccountPage 
{
    constructor(page)
    {
       this.page = page;
       this.myAccount = page.locator('[data-test="page-title"]');
       this.home = page.locator("a[data-test='nav-home']");
    }

    async validateMyAccountPageTitle() 
    {
        await expect(this.page).toHaveTitle(/Overview - Practice Software Testing/);
    }

    async isMyAccountTextViseble()
    {
        await expect(this.myAccount).toBeVisible();
    }

    async clickOnHomeBtn()
    {
        await this.home.click();
    }
}
module.exports = {MyAccountPage};