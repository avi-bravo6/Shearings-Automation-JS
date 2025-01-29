/* Description: This test script is created to test the Search functionality
Date: 06/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');
const { getTextAndCompare } = require('../../pages/Helper_Functions');

test('Test Search Functionality', async ({ page }) => {
    
    // Step 1: Navigate to the homepage
    await test.step('Navigate to Shearings homepage', async () => {
        await page.goto('https://www.shearings.com');
        console.log('Navigated to Shearings homepage');
    });

    // Step 2: Verify Search button is visible and click it
    await test.step('Click on the Search button', async () => {
        const searchButton = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/button';
        await expect(page.locator(searchButton)).toBeVisible();
        await page.locator(searchButton).click();
        console.log('Clicked on Search button');
    });

    // Step 3: Enter text into the Search field
    await test.step('Enter text "London" into the Search field', async () => {
        const searchField = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/div/div/div[1]/div[1]/div[1]/div/form/input';
        await page.locator(searchField).fill('London');
        console.log('Entered text "London" into Search field');
    });

    // Step 4: Click on the first search result
    await test.step('Click on the first search result', async () => {
        const searchResult = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/div/div/div[2]/div/div[2]/div/div/ol/li[1]/div/div/a';
        await expect(page.locator(searchResult)).toBeVisible();
        await page.locator(searchResult).click();
        console.log('Clicked on the first search result');
    });

    // Step 5: Verify user is navigated to the correct page
    await test.step('Verify the URL contains "londons-royal-palaces"', async () => {
        await expect(page).toHaveURL(/londons-royal-palaces/);
        console.log('Verified the URL contains "londons-royal-palaces"');
    });

    // Step 6: Verify the page title
    await test.step('Verify the page title is correct', async () => {
        const pageTitle = await page.title();
        const expectedTitle = "London's Royal Palaces | Shearings";
        expect(pageTitle).toBe(expectedTitle);
        console.log("Page title matches: London's Royal Palaces | Shearings");
    });

    console.log('Search functionality is working correctly');
});
