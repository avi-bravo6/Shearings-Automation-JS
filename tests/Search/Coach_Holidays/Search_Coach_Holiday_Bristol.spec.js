/* 
Description: This test script is created to test Coach Holiday search functionality via selecting options
Date: 27/01/2025
Created by: Avi 
*/

import { test } from '@playwright/test';
import { isVisible, click, visibleAndClick, getTextAndCompare } from '../../../pages/Helper_Functions.js';

test('Test Coach Holiday Search', async ({ page }) => {
    // Step 1: Navigate to the Home Page
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Home Page');

    // Step 2: Select Departing From option
    await page.waitForTimeout(2000); // Added a delay to ensure all elements are loaded
    await click(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span');

    const modalHeaderXPath = '//*[@id="ModalDeparturePoint"]/div/div/div[1]/h5';
    if (await isVisible(page, modalHeaderXPath)) {
        console.log('Departing From modal visible');

        await visibleAndClick(page, '//*[@id="accordion1_1737957887037"]/button');
        await visibleAndClick(page, '//*[@id="ModalDeparturePoint"]/div/div/div[3]/div[2]/div/div/div[2]/div/div[1]/div');
        await visibleAndClick(page, '//*[@id="ModalDeparturePoint"]/div/div/div[4]/div/div[2]/button');
        await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span','Bristol');
        console.log('Departing From option selected')
    } else {
        console.error('Departing From modal did not appear');
    }

    //Step 3: Select Departing month option
    await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[2]/span[1]'); //Click on Departing month option
    await getTextAndCompare(page, '//*[@id="ModalDepartureDate"]/div/div/div[1]/h5','Departure Date'); //Pop up title verifiation
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[4]/div/div[1]/button'); //Clear button
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[3]/div[2]/div/div/label/select'); //Month selection dropdown
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[3]/div[2]/div/div/label/select/option[22]'); //December 2026
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[4]/div/div[2]/button'); //Save button
    await getTextAndCompare(page,'//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[2]/span[1]/span'); //Departing Month verification
    console.log('Departing month selected successfully');

    //Step: 4 Select passengers
    await visibleAndClick(page,'//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[3]/span[1]'); //Click on Passenger option
    await getTextAndCompare(page,'//*[@id="ModalPassengers"]/div/div/div[1]/h5','Passengers');  //Pop up title verification
    await visibleAndClick(page,'//*[@id="ModalPassengers"]/div/div/div[4]/div/div[1]/button');  //Clear button
    await visibleAndClick(page,'//*[@id="ModalPassengers"]/div/div/div[2]/div[2]/div/div[1]/div/div/div/button[1]'); //Minus button
    await visibleAndClick(page,'//*[@id="ModalPassengers"]/div/div/div[4]/div/div[2]/button');  //Save button
    await getTextAndCompare(page,'//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[3]/span[1]/span','1 Adult');
    console.log('Passenger entered successfully.')

    //Step 5: Click on Search button
    await visibleAndClick(page,'//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[4]/input');  //Search button
    console.log('Search button clicked');
    await page.waitForTimeout(5000); //wait

    //Step 4: Verify search results
    await getTextAndCompare(page,'//*[@id="tour-search-results"]/div/section/div[6]','Whoop! \nHere are \n4 \nCoach Holidays from');
    console.log('Search result page header verified');

    for(let i = 1; i <= 4; i++){
        const holiday_card = `//*[@id="tour-search-results"]/div/section/div[8]/div/div[${i}]`;
        await isVisible(page, holiday_card);
        console.log(`Holiday card ${i} verified`);
    }
});
