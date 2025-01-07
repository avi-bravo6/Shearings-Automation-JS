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

// Function to get text from an element
async function getText(page, xpath) {
    const element = page.locator(xpath);
    const text = await element.innerText(); 
    return text.trim();
}

// Function to get text and compare
async function getTextAndCompare(page, xpath, expectedText) {
    const text = await page.locator(`xpath=${xpath}`).innerText();
    return text.trim() === expectedText;
}

// Function to enter data in field
const inputDataInField = async (page, xpath, data) => {
    const inputField = await page.locator(xpath);

    // Wait for the element to be visible before interacting with it
    await inputField.waitFor({ state: 'visible', timeout: 5000 });

    // Fill the input field with the given data
    await inputField.fill(data);  
    console.log(`Entered data in field with XPath: ${xpath}`);
};

// Function to navigate to a page
const NavigateToUsefulInfo = async (page, xpath, data) => {
    
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
    getText,
    getTextAndCompare,
    inputDataInField,
};
