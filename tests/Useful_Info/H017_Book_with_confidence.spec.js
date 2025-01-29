/* Description: This test script is created to test the Book with confidence page
Date: 08/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare, click, isVisible, urlContains } from '../../pages/Helper_Functions';

test('Test Book with confidence', async ({ page }) => {

    // Step 1: Navigate to Book with confidence page
    await test.step('Navigate to Book with confidence page', async () => {
        await Navigate_To_Useful_Info(page, '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[11]/a/span');
    });

    // Step 2: Verify correct page navigation
    await test.step('Verify navigation to the correct page', async () => {
        const expectedUrlPart = 'pricing-policy';
        const isCorrectUrl = await urlContains(page, expectedUrlPart);

        if (isCorrectUrl) {
            console.log('Navigated to Book with confidence page');
            // Playwright doesn’t have a built-in method for attaching data, but you can log it or handle it in a custom manner.
            console.log(`Navigated to: ${await page.url()}`);
        } else {
            console.log('Navigated to incorrect page');
        }
    });

});
