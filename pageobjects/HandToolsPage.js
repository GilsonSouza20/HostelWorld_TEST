const { expect } = require('@playwright/test');

class HandToolsPage {
    
    constructor(page)
    {
        this.page = page;
    }

    async validateHandToolsPageTitle() 
    {
        await expect(this.page).toHaveTitle(/Hand Tools - Practice Software Testing/);
    }
}
module.exports = {HandToolsPage};