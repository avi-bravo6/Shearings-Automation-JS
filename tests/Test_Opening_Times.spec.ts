/* Description: This test is created to test the opening times functionality
Date: 03/01/2025
Created by: Avi */

import { test, expect, Page } from '@playwright/test';
import { HomePage, isVisible } from '../pages/Helper_Functions.js';

test('Test Opening Times', async ({ page }: { page: Page }) => {
    // Instantiate the HomePage class
    const homePage = new HomePage(page);

    // Step 1: Navigate to Home Page
    await homePage.goToHomePage();
    console.log('Navigated to Home Page');

    // Step 2: Click on Opening times button
    const openingTimesButton: string = '//*[@id="top"]/div[1]/div/ul/li[2]/button';
    await page.locator(openingTimesButton).click();
    console.log('Clicked on Opening Times button');

    // Step 3: Verify the opening times content
    const openingTimesHeading: string = '//*[@id="tooltip0"]/div[3]/h6';
    const openingTimesDescription: string = '//*[@id="tooltip0"]/div[3]/p[1]';
    const openingTimesSchedule: string = '//*[@id="tooltip0"]/div[3]/p[2]';

    // Use isVisible to verify elements
    const headingVisible: boolean = await isVisible(page, openingTimesHeading);
    const descriptionVisible: boolean = await isVisible(page, openingTimesDescription);
    const scheduleVisible: boolean = await isVisible(page, openingTimesSchedule);

    expect(headingVisible).toBe(true);
    expect(descriptionVisible).toBe(true);
    expect(scheduleVisible).toBe(true);
    console.log('Opening times content verified successfully');
});
