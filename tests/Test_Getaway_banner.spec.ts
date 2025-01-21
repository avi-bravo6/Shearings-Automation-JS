/* Description: This test script is created to test the Getaway Banner functionality
Date: 06/01/2025
Created by: Avi */

import { test, expect, Page } from '@playwright/test';
import { getTextAndCompare } from '../pages/Helper_Functions';

test('Test Getaway Banner', async ({ page }: { page: Page }) => {

    // Step 1: Navigate to Home Page
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Home Page');

    // Step 2: Verify Getaway banner is visible
    const bannerXpath: string = '//html/body/section[2]/div/div/div/p/span[1]';
    await expect(page.locator(bannerXpath)).toBeVisible();
    console.log('Getaway banner is visible');

    // Step 3: Click on Take a look button
    const btnXpath: string = '//html/body/section[2]/div/div/div/a';
    await page.locator(btnXpath).click();
    console.log('Clicked on Take a look button');

    // Step 4: Verify user is navigated to Getaway page
    await expect(page).toHaveURL(/last-minute-holidays/);
    console.log('URL verified successfully: Navigated to Getaway page');

    // Step 5: Verify page title
    const titleXpath: string = '//html/body/section[2]/div/div/div/div/h1';
    const isTitleCorrect: boolean = await getTextAndCompare(page, titleXpath, 'Last minute holidays');
    if (isTitleCorrect) {
        console.log('Page title verified successfully: Last minute holidays');
    } else {
        console.log('Page title verification failed.');
    }
});