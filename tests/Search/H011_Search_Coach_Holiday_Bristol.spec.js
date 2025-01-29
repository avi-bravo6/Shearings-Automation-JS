/* 
Description: This test script tests Coach Holiday search functionality via selecting options
Date: 27/01/2025
Created by: Avi 
*/

import { test } from '@playwright/test';
import { Select_Departing_From, Select_Departing_Month, Select_Passengers, Click_On_Search_Button, Verify_Search_Results } from '../../pages/Coach_Holidays_Functions';

test('Test Coach Holiday Search', async ({ page }) => {
    await test.step('Navigate to Home Page', async () => {
        await page.goto('https://www.shearings.com');
        console.log('✅ Navigated to Home Page');
    });

    await test.step('Select Departing From', async () => {
        await Select_Departing_From(page);
    });

    await test.step('Select Departing Month', async () => {
        await Select_Departing_Month(page);
    });

    await test.step('Select Passengers', async () => {
        await Select_Passengers(page);
    });

    await test.step('Click Search Button', async () => {
        await Click_On_Search_Button(page);
    });

    await test.step('Verify Search Results', async () => {
        await Verify_Search_Results(page);
    });
});
