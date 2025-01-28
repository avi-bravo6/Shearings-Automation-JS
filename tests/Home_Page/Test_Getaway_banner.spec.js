/* Description: This test script is created to test the Getaway Banner functionality
Date: 06/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');
const { getTextAndCompare } = require('../../pages/Helper_Functions');

test('Test Getaway Banner', async ({ page }) => {

    // Step 1: Navigate to Home Page
    await test.step('Navigate to Home Page', async () => {
        await page.goto('https://www.shearings.com');
        console.log('Navigated to Home Page');
    });

    // Step 2: Verify Getaway banner is visible
    await test.step('Verify Getaway Banner is Visible', async () => {
        const bannerXpath = '//html/body/section[2]/div/div/div/p/span[1]';
        await expect(page.locator(bannerXpath)).toBeVisible();
        console.log('Getaway banner is visible');
    });

    // Step 3: Click on Take a Look button
    await test.step('Click on Take a Look Button', async () => {
        const btnXpath = '//html/body/section[2]/div/div/div/a';
        await page.locator(btnXpath).click();
        console.log('Clicked on Take a look button');
    });

    // Step 4: Verify user is navigated to Getaway page
    await test.step('Verify Navigation to Getaway Page', async () => {
        await expect(page).toHaveURL(/last-minute-holidays/);
        console.log('URL verified successfully: Navigated to Getaway page');
    });

    // Step 5: Verify page title
    await test.step('Verify Page Title', async () => {
        const titleXpath = '//html/body/section[2]/div/div/div/div/h1';
        const titleText = await page.locator(titleXpath).innerText();
        await expect(titleText).toBe('Last-Minute Holidays');
        console.log('Page title verified successfully: Last minute holidays');
    });
});
