/* Description: This test script is created to test the Our Awards page
Date: 08/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare, urlContains, isVisible } from '../../pages/Helper_Functions';

test('Test Our Awards', async ({ page }) => {

    test.setTimeout(10000); // Set timeout to 10 secs for the test

    // Step 1: Navigate to Our Awards page
    await test.step('Navigate to Our Awards page', async () => {
        await Navigate_To_Useful_Info(page, '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[10]/a/span');
        const isUrlCorrect = await urlContains(page, 'about-us');
        if (!isUrlCorrect) {
            throw new Error('Navigated to incorrect page');
        }
        console.log('Navigated to Our Awards page');
    });

    // Step 2: Verify page title
    await test.step('Verify page title', async () => {
        const pageTitleXpath = '/html/body/section[2]/div/div[2]/div/h1';
        const expectedTitle = 'A big thank you';
        await getTextAndCompare(page, pageTitleXpath, expectedTitle);
        console.log('Page title verified successfully.');
    });


    // Step 3: Verify awards visibility
    await test.step('Verify awards visibility', async () => {
    for (let i = 1; i <= 23; i++) {
        const xpath = `/html/body/section[3]/div/div/div[${i}]`;
        await isVisible(page, xpath);
        console.log(`Award ${i} verified`);
        }
    });

});
