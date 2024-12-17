const { expect } = require('@playwright/test');

class PowerToolsPage {
    
    constructor(page)
    {
        this.page = page;
    }

    async validatePowerToolsPageTitle() 
    {
        await expect(this.page).toHaveTitle(/Power Tools - Practice Software Testing/);
    }
}
module.exports = {PowerToolsPage};