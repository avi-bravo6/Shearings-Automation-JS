// Function to go to home page
class HomePage {
    constructor(page) {
        this.page = page;
    }
    async goToHomePage() {
        await this.page.goto('https://www.shearings.com/');
        console.log('Navigated to Shearings homepage');
    }
}

// Function to check if an element is visible
async function isVisible(page, xpath) {
    const element = page.locator(`xpath=${xpath}`); // Adding 'xpath=' prefix
    const visible = await element.isVisible();
    return visible;
}
module.exports = { isVisible };

// Function to check if an element is enabled
async function isEnabled(page, xpath) {
    const element = page.locator(xpath);
    return await element.isEnabled();
}

// Function to click an element
async function click(page, xpath) {
    const element = page.locator(xpath);
    await element.click();
}

// Function to scroll to an element
async function scrollTo(page, xpath) {
    await page.locator(`xpath=${xpath}`).scrollIntoViewIfNeeded();
}

// Function to check if the URL contains text
async function urlContains(page, text) {
    const url = await page.url();
    return url.includes(text);
}

// Function to fill an input field
async function fillInput(page, xpath, text) {
    const element = page.locator(`xpath=${xpath}`);
    await element.fill(text);
}

// Export everything
module.exports = {
    HomePage,
    isVisible,
    isEnabled,
    click,
    scrollTo,
    urlContains,
    fillInput,
};
