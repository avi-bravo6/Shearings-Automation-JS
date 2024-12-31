const { test, expect } = require('@playwright/test');
const { isVisible, isClickable } = require('../utils/ElementUtils'); // Import utility functions

test('Check Brochure Request button', async ({ page }) => {
  const brochureRequestXPath = '//*[@id="top"]/div[1]/div/ul/li[1]/a'; // XPath of Brochure Request button

  // Step 1: Open the homepage
  await page.goto('https://www.shearings.com/');

  // Step 2: Check if the Brochure Request button is visible
  const visible = await isVisible(page, brochureRequestXPath);
  console.log(`Is Brochure Request button visible? ${visible}`);

  // Step 3: Check if the Brochure Request button is clickable
  const clickable = await isClickable(page, brochureRequestXPath);
  console.log(`Is Brochure Request button clickable? ${clickable}`);

  // Step 4: If visible and clickable, click the button
  if (clickable) {
    await page.locator(brochureRequestXPath).click();
    console.log('Brochure Request button clicked');
  }

  // Step 5: Optionally, you can verify the navigation or any other action
  await expect(page).toHaveURL(/brochurerequest/);
});
