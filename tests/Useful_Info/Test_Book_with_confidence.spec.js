/* Description: This test script is created to test the Book with confidence page
Date: 08/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import allure from 'allure-commandline';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare, click, isVisible, urlContains } from '../../pages/Helper_Functions';

test('Test Book with confidence', async ({ page }) => {

    // Step 1: Navigate to Book with confidence page
    await allure.step('Navigate to Book with confidence page', async () => {
        await Navigate_To_Useful_Info(page, '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[11]/a/span');
    });

    // Step 2: Verify correct page navigation
    await allure.step('Verify navigation to the correct page', async () => {
        const expectedUrlPart = 'pricing-policy';
        const isCorrectUrl = await urlContains(page, expectedUrlPart);

        if (isCorrectUrl) {
            console.log('Navigated to Book with confidence page');
            allure.addAttachment('URL', `Navigated to: ${await page.url()}`);
        } else {
            console.log('Navigated to incorrect page');
            allure.addAttachment('Expected URL', `Expected URL to contain: ${expectedUrlPart}`);
            allure.addAttachment('Actual URL', `Actual URL: ${await page.url()}`);
            throw new Error('Navigated to incorrect page');
        }
    });

});
