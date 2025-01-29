/* Description: This test script is created to test the River Cruises page
Date: 08/01/2025
Created by: Avi */

const { test, expect } = require ('@playwright/test');  
const { 
    Navigate_To_River_Cruises, 
    Select_Departing_From, 
    Select_Departing_Month, 
    Click_On_Search_Button, 
    Verify_RiverCruise_Search_Results 
} = require('../../pages/Coach_Holidays_Functions');

test('Test_River_Cruises', async ({ page }) => {
    // Step 1: Navigate to Home Page
    try {
        await page.goto('https://www.shearings.com');
        console.log('✅ Navigated to Home Page');
    } catch (error) {
        console.error('Error navigating to Home Page:', error);
    }

    // Step 2: Navigate to River Cruises section
    await test.step('✅ Navigate to River Cruises section', async () => {
        try {
            await Navigate_To_River_Cruises(page);
            console.log('✅ Navigated to River Cruises section');
        } catch (error) {
            console.error('❌ Failed to navigate to River Cruises section:', error);
        }
    });

    // Step 3: Select Departing From
    await test.step('Select Departing From', async () => {
        try {
            await Select_Departing_From(page);
            console.log('✅ Departing From selected');
        } catch (error) {
            console.error('❌ Failed to select Departing From:', error);
        }
    });

    // Step 4: Select Departing Month
    await test.step('Select Departing Month', async () => {
        try {
            await Select_Departing_Month(page);
            console.log('✅ Departing Month selected');
        } catch (error) {
            console.error('❌ Failed to select Departing Month:', error);
        }
    });

    // Step 5: Click Search Button
    await test.step('Click Search Button', async () => {
        try {
            await Click_On_Search_Button(page);
            const results = await page.locator('.search-results');  // Adjust selector based on your page
            await expect(results).toBeVisible();
            console.log('✅ Search Button clicked and results displayed');
        } catch (error) {
            console.error('❌ Failed to click Search Button or verify results:', error);
        }
    });

    // Step 6: Verify Search Results
    await test.step('Verify Search Results', async () => {
        try {
            await Verify_RiverCruise_Search_Results(page);
            console.log('✅ Search results verified');
        } catch (error) {
            console.error('❌ Failed to verify search results:', error);
        }
    });
});
