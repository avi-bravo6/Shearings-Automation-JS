/* Description: This test script is created to test the FAQ page
Date: 08/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare, click, isVisible } from '../../pages/Helper_Functions';   

test('Test FAQs', async ({ page }) => {

    // Navigate to FAQ page
    await Navigate_To_Useful_Info(page, '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[6]/a/span');
    console.log('Navigated to FAQ page');

    // Verify page title
    const pageTitleXpath = '/html/body/section[2]/div/div[2]/div[1]/h1';
    await getTextAndCompare(page, pageTitleXpath, 'Frequently Asked Questions');
    console.log('Page title verified successfully.');

    

    // Verify page section 1
    const section1 = '/html/body/section[3]/div/div/div/h3[1]';
    await getTextAndCompare(page, section1, 'Bagging Your Holiday');
    console.log('Bagging Your Holiday verified successfully.');

    // Verify answer 1
    const button1 = '//*[@id="accordion47_1736328011147"]/button/span';
    await isVisible(page, button1);
    if (await isVisible(page, button1) === true) {
        await click(page, button1);
        console.log('Clicked to expand answer 1');
        await getTextAndCompare(page, answer1, 'If you have any questions about a holiday or would like to make a booking, drop a message to our Reservations team ');
        console.log('Answer 1 verified successfully.');
    }
    else{console.log('Button is not visible');}
    
});