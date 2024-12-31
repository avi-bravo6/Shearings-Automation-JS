// tests/launch.spec.js

const { test, expect } = require('@playwright/test');
const LaunchPage = require('../pages/LaunchPage').default;

test('Launch Shearings Home Page', async ({ page }) => {
  // Instantiate the LaunchPage class
  const launchPage = new LaunchPage(page);

  // Call the launchHomePage function
  await launchPage.launchHomePage();

   //Verify the page title
   const pageTitle = await page.title();
   console.log(`Page Title: ${pageTitle}`);
   expect(pageTitle).toContain('Shearings'); 
});
