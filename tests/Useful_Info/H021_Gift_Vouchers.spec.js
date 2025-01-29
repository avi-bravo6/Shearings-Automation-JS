/* Description: This test script is created to test the Gift Vouchers page
Date: 08/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test'; // Playwright's test package already supports steps
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare, click, isVisible } from '../../pages/Helper_Functions';

test('Test Gift Vouchers', async ({ page }) => {

    test.setTimeout(120000); // Set timeout to 2 minutes for the test

    // Step 1: Navigate to Gift Vouchers page
    await test.step('Navigate to Gift Vouchers page', async () => {
        await Navigate_To_Useful_Info(page, '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[7]/a/span');
        console.log('Navigated to Gift Vouchers page');
    });

    // Step 2: Verify page title
    await test.step('Verify page title', async () => {
        const pageTitleXpath = '/html/body/section[2]/div/div[2]/div[1]/h1';
        const expectedTitle = 'Gift Vouchers';
        await getTextAndCompare(page, pageTitleXpath, expectedTitle);
        console.log('Page title verified successfully.');
    });

    // Step 3: Verify page content
    await test.step('Verify page content', async () => {
        const pageContentXpath = '/html/body/section[3]/div/div/div/div';
        const expectedContent = `Terms & Conditions\nWith a Shearings gift voucher, the holder gets a nice little price drop on any Shearings holiday, equal to the value of the voucher.\nNo cash alternative is available.\nNo change can be given for any product under the value shown using the gift voucher.\nPhotocopies will not be accepted.\nGift vouchers are not transferable.\nAll holidays are subject to availability.\nTo redeem your gift voucher, call our Reservations team on 01709 249 698.`;
        
        try {
            await getTextAndCompare(page, pageContentXpath, expectedContent);
            console.log('Page content verified successfully.');
        } catch (error) {
            allure.addAttachment('Page Content Verification Failed', `Expected content: ${expectedContent}, but got: ${await page.locator(pageContentXpath).textContent()}`);
            throw error; // Fail the test if the content does not match
        }
    });
});
