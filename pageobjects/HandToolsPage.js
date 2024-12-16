const { expect } = require('@playwright/test');

class HandToolsPage {
    
    constructor(page)
    {
        this.page = page;
        this.userEmail = page.locator("");

    }

  
}
module.exports = {HandToolsPage};