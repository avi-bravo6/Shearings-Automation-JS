/* 
Description: This test script is created to test Coach Holiday search functionality via user input
Date: 27/01/2025
Created by: Avi 
*/

import { test } from '@playwright/test';
import { Select_Departing_From_Userinput, Select_Departing_Month, Select_Passengers, Click_On_Search_Button, Verify_Search_Results } from '../../pages/Coach_Holidays_Functions';
import { isVisible, getTextAndCompare } from '../../pages/Helper_Functions.js';

test('Test Coach Holiday Search', async ({ page }) => {

    // Step 1: Navigate to website
    await test.step('Navigate to Coach Holiday page', async () => {
        await page.goto('https://www.shearings.com');
        console.log('Navigated to Coach Holiday page');
    });

    // Step 2: Select Departing From option
    await test.step('Select Departing From option', async () => {
        await Select_Departing_From_Userinput(page);
    });

    // Step 3: Select Departing Month option
    await test.step('Select Departing Month option', async () => {
        await Select_Departing_Month(page);
    });

    // Step 4: Select Passengers
    await test.step('Select Passengers', async () => {
        await Select_Passengers(page);
    });

    // Step 5: Click on Search button
    await test.step('Click on Search button', async () => {
        await Click_On_Search_Button(page);
    });

    // Step 6: Verify Search Results
    await test.step('Verify Search Results', async () => {
        await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[6]', 'Whoop! \nHere are \n4 \nCoach Holidays from');
        console.log('Search result page header verified');

        // Verify Holiday Cards
        for (let i = 1; i <= 4; i++) {
            const holidayCardXPath = `//*[@id="tour-search-results"]/div/section/div[8]/div/div[${i}]`;
            await isVisible(page, holidayCardXPath);
            console.log(`Holiday card ${i} verified`);
        }
    });
});
