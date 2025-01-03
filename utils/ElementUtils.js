// utils/ElementUtils.js

// Function to check if an element is visible
async function isVisible(page, xpath) {
    const element = page.locator(xpath);
    const isVisible = await element.isVisible();
    return isVisible; // Returns true if the element is visible, false otherwise
  }
  
  // Function to check if an element is clickable (visible and enabled)
  async function isClickable(page, xpath) {
    const element = page.locator(xpath);
    const isEnabled = await element.isEnabled();
    const isVisible = await element.isVisible();
    return isEnabled && isVisible; // Returns true if the element is visible and enabled
  }
  
  module.exports = { isVisible, isClickable };

  async function checkElementStatus(page, xpath) {
    const isVisible = await page.isVisible(xpath);
    const isEnabled = await page.isEnabled(xpath);
    console.log(`Is the element visible? ${isVisible}`);
    console.log(`Is the element enabled? ${isEnabled}`);
    return { isVisible, isEnabled };
  }
  
  module.exports = { checkElementStatus };

// Function to get text and print
async function getTextAndPrint(page, xpath) {
  const text = await page.locator(`xpath=${xpath}`).innerText();
  console.log(`Text for XPath ${xpath}: ${text}`);
}

module.exports = { getTextAndPrint };

// Function to scroll to an element and click it
async function scrollTo(page, xpath) {
  await page.locator(`xpath=${xpath}`).scrollIntoViewIfNeeded();
}

module.exports = { scrollTo };