import { test, expect } from '@playwright/test';
import { urlContains, getText, getTextAndCompare } from '../../pages/Helper_Functions.js';

test('Test Automated Payments', async ({ page }) => {

    // Step 1: Navigate to Home Page
    await test.step('Navigate to Home Page', async () => {
        await page.goto('https://www.shearings.com');
        console.log('✅ Navigated to Home Page');
    });

    // Step 2: Click on Useful Info button
    await test.step('Click on Useful Info button', async () => {
        const usefulInfobutton = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/button';
        await page.locator(usefulInfobutton).click();
        console.log('✅ Clicked on Useful Info button');
    });

    // Step 3: Click on Automated Payments button
    await test.step('Click on Automated Payments button', async () => {
        const automatedPaymentsButton = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[1]/a/span';
        await page.locator(automatedPaymentsButton).click();
        console.log('✅ Clicked on Automated Payments button');
    });

    // Step 4: Verify the user is navigated to the correct page
    await test.step('Verify user navigation to the correct Automated Payments page', async () => {
        const urlContainsText = 'how-automated-balance-payments-work';
        const isUrlCorrect = await urlContains(page, urlContainsText);
        if (!isUrlCorrect) {
            // You can add attachment here if the URL doesn't match
            allure.addAttachment('Page URL', `Expected URL to contain: ${urlContainsText}`);
            throw new Error('❌ Navigated to incorrect page');
        }
        console.log('✅ Navigated to correct page');
    });

    // Step 5: Verify the page title
    await test.step('Verify the page title', async () => {
        const titleXpath = '//html/body/section[3]/div/div/div/p[1]';
        const expectedTitle = 'Automated balance payments – let’s break it down!';

        const isTitleCorrect = await getTextAndCompare(page, titleXpath, expectedTitle);
        if (isTitleCorrect) {
            console.log('✅ Title verified');
        } else {
            allure.addAttachment('Page Title', `Expected: ${expectedTitle}, but got: ${await getText(page, titleXpath)}`);
            console.log('❌ Title not verified');
        }
    });
});
