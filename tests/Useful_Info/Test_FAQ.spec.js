/* Description: This test script is created to test the FAQ page
Date: 08/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import allure from 'allure-commandline';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare, click, isVisible } from '../../pages/Helper_Functions';

test('Test FAQs', async ({ page }) => {

    test.setTimeout(120000); // Set timeout to 2 minutes for the test

    // Step 1: Navigate to FAQ page
    await allure.step('Navigate to FAQ page', async () => {
        await Navigate_To_Useful_Info(page, '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[6]/a/span');
        console.log('Navigated to FAQ page');
    });

    // Step 2: Verify the page title
    await allure.step('Verify the page title is "Frequently Asked Questions"', async () => {
        const pageTitleXpath = '/html/body/section[2]/div/div[2]/div[1]/h1';
        const expectedTitle = 'Frequently Asked Questions';
        await getTextAndCompare(page, pageTitleXpath, expectedTitle);
        console.log('Page title verified successfully.');
    });

    // Step 3: Verify page section 1 title
    await allure.step('Verify section 1 title "Bagging Your Holiday"', async () => {
        const section1 = '/html/body/section[3]/div/div/div/h3[1]';
        const expectedSection1 = 'Bagging Your Holiday';
        await getTextAndCompare(page, section1, expectedSection1);
        console.log('Bagging Your Holiday section verified successfully.');
    });

    // Step 4: Verify the answer for question 1
    await allure.step('Verify answer for question 1', async () => {
        const button1 = '//*[@id="accordion47_1736328011147"]/button/span';
        await isVisible(page, button1);

        if (await isVisible(page, button1) === true) {
            await click(page, button1);
            console.log('Clicked to expand answer 1');

            const answer1Xpath = '//*[@id="accordion47_1736328011147"]/div/div/p'; // Add the correct XPath for answer text
            const expectedAnswer1 = 'If you have any questions about a holiday or would like to make a booking, drop a message to our Reservations team';
            await getTextAndCompare(page, answer1Xpath, expectedAnswer1);
            console.log('Answer 1 verified successfully.');
        } else {
            console.log('Button is not visible');
            allure.addAttachment('Button Visibility Issue', 'The button to expand the answer was not visible on the FAQ page');
        }
    });
});
