const { expect } = require('@playwright/test');

class OtherPage {
    
    constructor(page)
    {
        this.page = page;
    }

    async validateOtherPageTitle() 
    {
        await expect(this.page).toHaveTitle(/Other - Practice Software Testing/);
    }
}
module.exports = {OtherPage};