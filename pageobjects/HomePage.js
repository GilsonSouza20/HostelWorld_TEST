const { expect } = require('@playwright/test');

let currentLanguage = "Accueil";

class HomePage {
    constructor(page) {
        this.page = page;
        this.homePageSort = page.locator('#filters > h4:nth-child(1)');
        this.homePagePriceRange = page.locator('#filters > h4:nth-child(4)');
        this.homePageSearch = page.locator('#filters > h4:nth-child(7)');
        this.homePageByCategory = page.locator('#filters > h4:nth-child(12)');
        this.containerProducts = page.locator("div[class='container'][data-test]");
        this.categories = page.locator('a[data-test="nav-categories"]');
        this.handTools = page.locator('a[data-test="nav-hand-tools"]');
        this.powerTools = page.locator('a[data-test="nav-power-tools"]');
        this.others = page.locator('a[data-test="nav-other"]');
        this.specialTools = page.locator('a[data-test="nav-special-tools"]');
        this.searchField = page.locator('input[data-test="search-query"]');
        this.searchBtn = page.locator('button[data-test="search-submit"]');
        this.searchResult = page.locator('h3[data-test="search-caption"]');
        this.clickLanguage = page.locator('button[data-test="language"]');
        this.selectLanguageFR = page.locator("#dropdown-animated > li:nth-child(4) > a");
        this.accueilFR = page.locator("a[data-test='nav-home']");
    }

    async validateHomePageTitle() {
        await expect(this.page).toHaveTitle(/Practice Software Testing/);
    }

    async isHomePageSortViseble() {
        await expect(this.homePageSort).toBeVisible();
        await expect(this.homePageSort).toContainText("Sort");

        const sortText = await this.homePageSort.textContent();
        console.log('HomePage Sort Text:', sortText);
    }

    async isHomePagePriceRangeViseble() {
        await expect(this.homePagePriceRange).toBeVisible();
        await expect(this.homePagePriceRange).toContainText("Price Range");

        const priceRangeText = await this.homePagePriceRange.textContent();
        console.log('HomePage Price Range Text:', priceRangeText);
    }

    async isHomePageSearchViseble() {
        await expect(this.homePageSearch).toBeVisible();
        await expect(this.homePageSearch).toContainText("Search");

        const search = await this.homePageSearch.textContent();
        console.log('HomePage Search Text:', search);
    }

    async isHomePageCategoryFilterViseble() {
        await expect(this.homePageByCategory).toBeVisible();
        await expect(this.homePageByCategory).toContainText("By category:");

        const byCategory = await this.homePagePriceRange.textContent();
        console.log('HomePage Category filter Text:', byCategory);
    }

    async isHomePageContainerProducViseble() {
        await expect(this.containerProducts).toBeVisible();
    }

    async clickOnCategoriesDropDownBtn() {
        await this.categories.click();
    }

    async clickOnHandTools() {
        await this.handTools.click();
    }

    async clickOnPowerTools() {
        await this.powerTools.click();
    }

    async clickOnOthers() {
        await this.others.click();
    }

    async clickOnSpecialTools() {
        await this.specialTools.click();
    }

    async searchProduct(search) {
        await this.searchField.fill(search);
    }

    async clickSearchProduct() {
        await this.searchBtn.click();
    }

    async verifySearchResult(searchResult) {
        await expect(this.searchResult).toContainText(searchResult);
    }

    async clickBtnLanguages() {
        await this.clickLanguage.click();
    }

    async selectLanguage() {
        await this.selectLanguageFR.click();
    }

    async checkLanguage() {
        await expect(this.accueilFR).toContainText(currentLanguage);
    }
}
module.exports = { HomePage };