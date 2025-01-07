/* Description: This test script is created to test the Agent Login button functionality
Date: 06/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');
const { HomePage, isVisible, urlContains, getText, getTextAndCompare } = require('../../../pages/Helper_Functions.js');

test('Test Car Parking', async ({ page }) => {

    // Step 1: Navigate to Home Page
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Home Page');

    // Step 2: Verify Car Parking banner is visible
    const CarParkingXpath = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[2]/a/span';
    await expect(page.locator(CarParkingXpath)).click();
    console.log('Clicked on Car Parking button');

    // Step 3: Verify the user is navigated to the correct page
    const urlContainsText = 'car-parking';
    const isUrlCorrect = await urlContains(page, urlContainsText);
    if (!isUrlCorrect) {
        throw new Error('Navigated to incorrect page');
    }
    console.log('Navigated to correct page');

    // Step 4: Verify the page title
    const titleXpath = '/html/body/section[2]/div/div/div[1]/h1';
    const expectedTitle = 'Easy-peasy car parking';
    const isTitleCorrect = await getTextAndCompare(page, titleXpath, expectedTitle);

    if (isTitleCorrect) {
        console.log("Page title matches: Easy-peasy car parking");
    } else {
        console.error("Page title does not match!");
    }

});