/* 
Description: This test script is created to test Coach Holiday search functionality via user input
Date: 27/01/2025
Created by: Avi 
*/

import { test } from '@playwright/test';
import { isVisible, visibleAndClick, getTextAndCompare, fillInput } from '../../../pages/Helper_Functions.js';

test('Test Coach Holiday Search', async ({ page }) => {

    //Step 1: Navigate to website
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Coach Holiday page');

    //Step 2: Select Departing From option
    await page.waitForTimeout(2000); // Added a delay to ensure all elements are loaded
    await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span'); // Click on Departig From option
    await visibleAndClick(page,'//*[@id="ModalDeparturePoint"]/div/div/div[4]/div/div[1]/button');  //Clear button
    await page.waitForTimeout(2000); //wait
    await fillInput(page,'//*[@id="ModalDeparturePoint"]/div/div/div[1]/label/div','London Victoria');
    await visibleAndClick(page,'//*[@id="awesomplete_list_7_item_0"]');     //Select London Victoria from suggestion
    await visibleAndClick(page,'//*[@id="ModalDeparturePoint"]/div/div/div[4]/div/div[2]/button');  //Save button
    await getTextAndCompare(page,'//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span','London Victoria');
    console.log('Value entered successfully in Departing From field.');

    //Step 3: Select Departing month option
    await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[2]/span[1]'); // Click on Departing month option
    await getTextAndCompare(page, '//*[@id="ModalDepartureDate"]/div/div/div[1]/h5','Departure Date'); //Pop up title verifiation
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[4]/div/div[1]/button'); //Clear button
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[3]/div[2]/div/div/label/select'); //Month selection dropdown
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[3]/div[2]/div/div/label/select/option[22]'); //December 2026
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[4]/div/div[2]/button'); //Save button
    await getTextAndCompare(page,'//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[2]/span[1]/span'); //Departing Month verification
    console.log('Departing month selected successfully'); 
    
    //Step: 4 Select passengers
    await visibleAndClick(page,'//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[3]/span[1]');    // Click on Passenger option
    await getTextAndCompare(page,'//*[@id="ModalPassengers"]/div/div/div[1]/h5','Passengers');  //Pop up title verification
    await visibleAndClick(page,'//*[@id="ModalPassengers"]/div/div/div[4]/div/div[1]/button');  //Clear button
    await visibleAndClick(page,'//*[@id="ModalPassengers"]/div/div/div[2]/div[2]/div/div[1]/div/div/div/button[1]');    //Minus button
    await visibleAndClick(page,'//*[@id="ModalPassengers"]/div/div/div[4]/div/div[2]/button');  //Save button
    await getTextAndCompare(page,'//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[3]/span[1]/span','1 Adult');
    console.log('Passenger entered successfully.')

    //Step 5: Click on Search button
    await visibleAndClick(page,'//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[4]/input');  //Search button
    console.log('Search button clicked');
    await page.waitForTimeout(5000); // wait

    //Step 4: Verify search results
    await getTextAndCompare(page,'//*[@id="tour-search-results"]/div/section/div[6]','Whoop! \nHere are \n4 \nCoach Holidays from');
    console.log('Search result page header verified');

    for(let i = 1; i <= 4; i++){
        const holiday_card = `//*[@id="tour-search-results"]/div/section/div[8]/div/div[${i}]`;
        await isVisible(page, holiday_card);
        console.log(`Holiday card ${i} verified`);
    }
});