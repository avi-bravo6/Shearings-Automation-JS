/* Description: This test script is created to test the Agent Login button functionality
Date: 06/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');
const { getTextAndCompare } = require('../../pages/Helper_Functions');

test('Test Search Functionality and Banners', async ({ page }) => {
    // Step 1: Navigate to the Home Page
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Home Page');

    // Step 2: Check if Search button is visible and click
    const searchButton = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/button';
    await expect(page.locator(searchButton)).toBeVisible();
    await page.locator(searchButton).click();
    console.log('Clicked on Search button');

    // Step 3: Verify visibility of banners
    const banner1Xpath = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/div/div/div[3]/div[1]/div/a/div/div/h4';
    const banner2Xpath = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/div/div/div[3]/div[2]/div/a/div/div/h4';
    const banner3Xpath = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/div/div/div[3]/div[3]/div/a/div/div/h4';

    await expect(page.locator(banner1Xpath)).toBeVisible();
    console.log('We’ve had a makeover! banner is visible');

    await expect(page.locator(banner2Xpath)).toBeVisible();
    console.log('Fancy a FREE brochure? banner is visible');

    await expect(page.locator(banner3Xpath)).toBeVisible();
    console.log('Bag your holiday from little banner is visible');

    // Step 4: Click and verify Banner 1
    await page.locator(banner1Xpath).click();
    console.log('Clicked Banner 1');
    await expect(page).toHaveURL(/why-we-rock/);
    console.log('Navigated to "Why We Rock" page successfully');


    // Step 6: Click and verify Banner 3
    await page.goto('https://www.shearings.com'); // Go back to Home Page
    await page.locator(searchButton).click(); // Open search menu again
    await page.locator(banner3Xpath).click();
    console.log('Clicked Banner 3');
    await expect(page).toHaveURL(/deposits/);
    console.log('Navigated to "Deposits" page successfully');

    const banner3TitleXpath = '/html/body/section[2]/div/div[2]/div/h1';
    const banner3ExpectedText = 'Our dependable deposits';
    const isBanner3TitleCorrect = await getTextAndCompare(page, banner3TitleXpath, banner3ExpectedText);
    if (isBanner3TitleCorrect) {
        console.log('Banner 3 title verified successfully.');
    } else {
        console.error('Banner 3 title verification failed.');
    }
});
