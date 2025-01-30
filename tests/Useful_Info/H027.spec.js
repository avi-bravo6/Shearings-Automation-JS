/* This test is created to test the Useful Info > Travel Advert page
Date: 30/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare, isEnabled } from '../../pages/Helper_Functions';    

test('Travel Advert', async ({ page }) => {
    // Step 1: Navigate to Home Page
    await test.step('Navigate to Home Page', async () => {
        await page.goto('https://www.shearings.com');
        console.log('Navigated to Home Page');
    });

    // Step 2: Navigate to Useful Info > Travel Advert
    await test.step('Click on Useful Info button', async () => {
        await Navigate_To_Useful_Info(page,'//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[15]/a');
    })

    // Step 3: Verify page title
    await test.step('Verify page title', async () => {
        await getTextAndCompare(page, '/html/body/section[2]/div/div[2]/div/h1', 'Grab the popcorn and watch our advert!');
        console.log('Page title verified successfully.');
    });

    // Step 4: Verify description
    await test.step('Verify description', async () => { 
        await getTextAndCompare(page, '/html/body/section[2]/div/div[2]/div/p', 'Been waiting for a nudge to plan that dream holiday? Well, here’s a whole push! Our new ad is bursting with staycation ideas, and our drivers are ready to roll with you to castles, coasts, and everything in between. Hit play and see where your next journey with Shearings could take you!');
        await getTextAndCompare(page, '/html/body/section[2]/div/section/div/div/div/div[2]/h3', "Here's an inside look...");
        await getTextAndCompare(page,'/html/body/section[2]/div/section/div/div/div/div[2]/p','We’re super-duper excited to be able to share some ‘rocking’ behind-the-scenes footage of our brand-new TV ad! Take a peek below...');
        console.log('Description verified successfully.');
    });
});