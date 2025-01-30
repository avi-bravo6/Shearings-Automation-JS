/* This test is created to test the Our Coaches page
Date: 30/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare, isEnabled, isVisible } from '../../pages/Helper_Functions';    

test('Our Coaches', async ({ page }) => {
    // Step 1: Navigate to Home Page
    await test.step('Navigate to Home Page', async () => {
        await page.goto('https://www.shearings.com');
        console.log('Navigated to Home Page');
    });

    // Step 2: Navigate to Useful Info > Our Coaches
    await test.step('Click on Useful Info button', async () => {
        await Navigate_To_Useful_Info(page,'//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[17]/a/span');
    });

    // Step 3: Verify page title   
    await test.step('Verify page title', async () => {
        await getTextAndCompare(page, '/html/body/section[2]/div/div[2]/div[1]/h1', 'Hassle-free Coach Holidays');
        console.log('Page title verified successfully.');
    });

    // Step 4: Verify description
    await test.step('Verify description', async () => {
        await getTextAndCompare(page, '/html/body/section[2]/div/div[2]/div[1]/h3', "This is how we roll…");   
        await getTextAndCompare(page, '/html/body/section[2]/div/div[2]/div[1]/p', 'You’ll take the road less hassled when you join one of our fully escorted coach holidays: no route planning, no map reading, no sat navs. Just comfort from the moment you step on board and sink into your cosy seat, to the moment you return home with endless stories to tell the friends and family (get ready for the “you went where?!” conversations).');
        
        for (let i = 0; i <= 7; i++) {
            const xpath = `//*[@id="travelInComfort"]/div/div/div[${i}]`;
            await isVisible(page, xpath);
        }        

        await getTextAndCompare(page,'/html/body/section[4]/div[1]/h3[1]','After a day of seeing the sights, what could be better than kicking back on your travels and letting all that excitement sink in? Our coaches have comfy reclining seats, so you can watch the world roll by, or switch on the overhead reading lights and get lost in a good book! With arm and footrests, along with tinted windows and curtains, these coaches are all about making sure you’re snug. It only gets better – they also come with hot drink facilities (depending on tour and duration), tasty refreshments, and for all European trips, you’ll have two drivers for double the fun! All coaches also have air conditioning, seatbelts for every seat and an on-board toilet.');
        await getTextAndCompare(page,'/html/body/section[4]/div[1]/p[2]/text()','You’ll enjoy top-notch service and reliability from our expert-trained coach crew, always ready to assist and guide you every step of the way! Our friendly team will keep you up to date through your entire holiday, so you can make the most of your journey.');
        await getTextAndCompare(page,'/html/body/section[4]/div[1]/h3[2]','Planet-Friendly Travel');
        await getTextAndCompare(page,'/html/body/section[4]/div[1]/p[3]','Did you know that a coach holiday is one of the greenest ways you can go on holiday? It has 6x lower carbon emissions than flying and 4x lower from driving! So, sit back, relax, and enjoy the view – it’s a hassle-free ride with like-minded people. And who knows, you might even end up with a group of new friends!');
        console.log('Description verified successfully.');
    });
});



    