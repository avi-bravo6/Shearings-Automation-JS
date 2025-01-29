// tests/sample.test.js
const { test, expect } = require('@playwright/test');

test('should load the correct page title', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://example.com');

  // Get the title of the page and check if it matches the expected value
  const title = await page.title();
  
  // Assert the title is correct
  expect(title).toBe('Example Domain');
});
