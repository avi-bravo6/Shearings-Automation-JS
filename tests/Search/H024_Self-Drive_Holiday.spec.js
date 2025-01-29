/* 
Description: This test script is created to test Self-Drive Holiday search functionality via selecting options
Date: 29/01/2025
Created by: Avi 
*/

import { test } from '@playwright/test';
import { urlContains } from '../../pages/Helper_Functions.js';
import { 
    Navigate_To_Self_Drive_Holidays, 
    Select_Arrival_Month, 
    Select_Guests, 
    Click_On_Search_Button, 
    Verify_Search_Results, 
    Verify_Search_Result_Header 
} from '../../pages/Self-Drive_Holidays_Functions.js';

test('Self-Drive Holiday', async ({ page }) => {
    // Step 1: Navigate to Self-Drive Holidays page
    await page.goto('https://shearings-development.legershearings.com/');
    await urlContains(page, 'self-drive-holidays');
    console.log('Navigated to Holiday Shearings page');

    // Step 2: Navigate to Self-Drive Holidays section
    await test.step('Navigate to Self-Drive Holidays section', async () => {
        await Navigate_To_Self_Drive_Holidays(page);
    });

    // Step 3: Select Arrival Month option
    await test.step('Select Arrival Month option', async () => {
        await Select_Arrival_Month(page);
    });

    // Step 4: Select Guests
    await test.step('Select Guests', async () => {
        await Select_Guests(page);
    });

    // Step 5: Click on Search button
    await test.step('Click on Search button', async () => {
        await Click_On_Search_Button(page);
    });

    // Step 6: Verify search results header
    await test.step('Verify search results header', async () => {
        await Verify_Search_Result_Header(page);
    });

    // Step 7: Verify search results
    await test.step('Verify search results', async () => {
        await Verify_Search_Results(page);
    });
});
