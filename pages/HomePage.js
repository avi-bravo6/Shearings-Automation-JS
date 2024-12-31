class HomePage {
    constructor(page) {
      this.page = page;
      // Selector for the Brochure Request button
      this.brochureRequestButton = '//*[@id="top"]/div[1]/div/ul/li[1]/a';
    }

    // Function to navigate to the homepage
    async goToHomePage() {
        await this.page.goto('https://www.shearings.com/');
        console.log('Navigated to Shearings homepage');
    }

    // Function to click on the Brochure Request button
    async clickBrochureRequestButton() {
        await this.page.locator(this.brochureRequestButton).click();
        console.log('Clicked on the Brochure Request button');
    }
}

module.exports = HomePage;

  
