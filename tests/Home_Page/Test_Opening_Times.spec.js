/* Description: This test is created to test the opening times functionality
Date: 03/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/Helper_Functions.js');

test('Test Opening Times', async ({ page }) => {
    // Instantiate the HomePage class
    const homePage = new HomePage(page);

    // Step 1: Navigate to Home Page
    await test.step('Navigate to Home Page', async () => {
        await homePage.goToHomePage();
        console.log('Navigated to Home Page');
    });

    // Step 2: Click on Opening Times button
    await test.step('Click on Opening Times button', async () => {
        const openingTimesButton = '//*[@id="top"]/div[1]/div/ul/li[2]/button';
        await page.locator(openingTimesButton).click();
        console.log('Clicked on Opening Times button');
    });

    // Step 3: Verify the opening times content
    await test.step('Verify opening times content', async () => {
        const openingTimesHeading = '//*[@id="tooltip0"]/div[3]/h6';
        const openingTimesDescription = '//*[@id="tooltip0"]/div[3]/p[1]';
        const openingTimesSchedule = '//*[@id="tooltip0"]/div[3]/p[2]';

        // Use expect() for assertions
        await expect(page.locator(openingTimesHeading)).toBeVisible();
        await expect(page.locator(openingTimesDescription)).toBeVisible();
        await expect(page.locator(openingTimesSchedule)).toBeVisible();

        console.log('Opening times content verified successfully');
    });
});
