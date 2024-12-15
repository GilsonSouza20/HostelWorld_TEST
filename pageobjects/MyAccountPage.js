const { expect } = require('@playwright/test');

class MyAccountPage 
{
    constructor(page)
    {
       this.page = page;
       this.myAccount = page.locator('[data-test="page-title"]');
    }

    async isMyAccountTextViseble()
    {
        await expect(this.myAccount).toBeVisible();
    }

    async validateMyAccountPageTitle() {
        await expect(this.page).toHaveTitle(/Overview - Practice Software Testing/);
    }
}
module.exports = {MyAccountPage};