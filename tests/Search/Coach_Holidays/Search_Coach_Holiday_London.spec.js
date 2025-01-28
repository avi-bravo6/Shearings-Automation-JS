/* 
Description: This test script is created to test Coach Holiday search functionality via user input
Date: 27/01/2025
Created by: Avi 
*/

import { test } from '@playwright/test';
import { isVisible, visibleAndClick, getTextAndCompare, fillInput } from '../../../pages/Helper_Functions.js';

test('Test Coach Holiday Search', async ({ page }) => {

    // Step 1: Navigate to website
    await test.step('Navigate to Coach Holiday page', async () => {
        await page.goto('https://www.shearings.com');
        console.log('Navigated to Coach Holiday page');
    });

    // Step 2: Select Departing From option
    await test.step('Select Departing From option', async () => {
        await page.waitForSelector('//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span'); // Ensure the Departing From button is visible
        await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span'); // Click on Departing From option
        
        await visibleAndClick(page, '//*[@id="ModalDeparturePoint"]/div/div/div[4]/div/div[1]/button');  // Clear button
        await fillInput(page, '//*[@id="ModalDeparturePoint"]/div/div/div[1]/label/div', 'London Victoria'); // Enter departure point
        await visibleAndClick(page, '//*[@id="awesomplete_list_7_item_0"]');  // Select London Victoria from suggestion
        await visibleAndClick(page, '//*[@id="ModalDeparturePoint"]/div/div/div[4]/div/div[2]/button');  // Save button
        await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span', 'London Victoria');
        console.log('Value entered successfully in Departing From field.');
    });

    // Step 3: Select Departing Month option
    await test.step('Select Departing Month option', async () => {
        await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[2]/span[1]'); // Click on Departing month option
        await getTextAndCompare(page, '//*[@id="ModalDepartureDate"]/div/div/div[1]/h5', 'Departure Date'); // Verify Pop-up title
        await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[4]/div/div[1]/button'); // Clear button
        await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[3]/div[2]/div/div/label/select'); // Month selection dropdown
        await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[3]/div[2]/div/div/label/select/option[22]'); // Select December 2026
        await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[4]/div/div[2]/button'); // Save button
        await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[2]/span[1]/span'); // Verify Departing Month
        console.log('Departing month selected successfully');
    });

    // Step 4: Select Passengers
    await test.step('Select Passengers', async () => {
        await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[3]/span[1]'); // Click on Passenger option
        await getTextAndCompare(page, '//*[@id="ModalPassengers"]/div/div/div[1]/h5', 'Passengers'); // Verify Pop-up title
        await visibleAndClick(page, '//*[@id="ModalPassengers"]/div/div/div[4]/div/div[1]/button'); // Clear button
        await visibleAndClick(page, '//*[@id="ModalPassengers"]/div/div/div[2]/div[2]/div/div[1]/div/div/div/button[1]'); // Minus button
        await visibleAndClick(page, '//*[@id="ModalPassengers"]/div/div/div[4]/div/div[2]/button'); // Save button
        await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[3]/span[1]/span', '1 Adult');
        console.log('Passenger entered successfully');
    });

    // Step 5: Click on Search button
    await test.step('Click on Search button', async () => {
        await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[4]/input'); // Search button
        console.log('Search button clicked');
        await page.waitForSelector('//*[@id="tour-search-results"]/div/section/div[6]'); // Wait for the search result page
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
