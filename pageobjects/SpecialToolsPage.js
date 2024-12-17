const { expect } = require('@playwright/test');

class SpecialToolsPage {
    
    constructor(page)
    {
        this.page = page;
        this.h2Text = page.locator('h2[data-test=page-title]');
    }

    async validateSpecialToolsPageTitle() 
    {
        await expect(this.page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
    }

    async validateSpecialToolsPageHeader()
    {
        await expect(this.h2Text).toContainText("Category: Special Tools"); 
    }

    async SpecialToolsPageHeaderShouldBeHidden() 
    {
        await expect(this.h2Text).toBeHidden();
    }

    

}
module.exports = {SpecialToolsPage};