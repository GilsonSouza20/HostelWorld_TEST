const { expect } = require('@playwright/test');

class HomePage 
{
    constructor(page)
    {
       this.page = page;
       this.homePageSort = page.locator('#filters > h4:nth-child(1)');
       this.homePagePriceRange = page.locator('#filters > h4:nth-child(4)');
       this.homePageSearch = page.locator('#filters > h4:nth-child(7)');
       this.homePageByCategory = page.locator('#filters > h4:nth-child(12)');
       this.containerProducts = page.locator("div[class='container'][data-test]");
       this.categories = page.locator('a[data-test="nav-categories"]');
       this.handTools = page.locator('a[data-test="nav-hand-tools"]');
       

    }

    async validateHomePageTitle() {
        await expect(this.page).toHaveTitle(/Practice Software Testing/);
    }

    async isHomePageSortViseble()
    {
        await expect(this.homePageSort).toBeVisible();
        await expect(this.homePageSort).toContainText("Sort");

        const sortText = await this.homePageSort.textContent();
        console.log('HomePage Sort Text:', sortText);
    }

    async isHomePagePriceRangeViseble()
    {
        await expect(this.homePagePriceRange).toBeVisible();
        await expect(this.homePagePriceRange).toContainText("Price Range");

        const priceRangeText = await this.homePagePriceRange.textContent();
        console.log('HomePage Price Range Text:', priceRangeText);
    }

    async isHomePageSearchViseble()
    {
        await expect(this.homePageSearch).toBeVisible();
        await expect(this.homePageSearch).toContainText("Search");

        const search = await this.homePagePriceRange.textContent();
        console.log('HomePage Search Text:', search);
    }

    async isHomePageCategoryFilterViseble()
    {
        await expect(this.homePageByCategory).toBeVisible();
        await expect(this.homePageByCategory).toContainText("By category:");

        const byCategory = await this.homePagePriceRange.textContent();
        console.log('HomePage Category filter Text:', byCategory);
    }

    async isHomePageContainerProducViseble()
    {
        await expect(this.containerProducts).toBeVisible();
    }

    async clickOnCategoriesDropDownBtn()
    {
        await this.categories.click();
    }

    async clickOnHandTools()
    {
        await this.handTools.click();
    }


} 
module.exports = {HomePage};