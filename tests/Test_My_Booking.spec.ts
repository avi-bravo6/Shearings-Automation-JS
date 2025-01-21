/* Description: This test is created to test My Booking button
Date: 03/01/2025
Created by: Avi */

import { test, expect, Page } from '@playwright/test';
import { HomePage, isVisible } from '../pages/Helper_Functions.js';

test('Test My Booking', async ({ page }: { page: Page }) => {
    // Instantiate the HomePage class
    const homePage = new HomePage(page);    

    // Step 1: Navigate to Home Page    
    await homePage.goToHomePage();
    console.log('Navigated to Home Page');    

    // Step 2: Click on My Booking button
    const myBookingButton: string = '//*[@id="top"]/div[1]/div/ul/li[3]/a';
    await page.locator(myBookingButton).click();
    console.log('Clicked on My Booking button');

    // Step 3: Verify user is redirected to My Booking page
    const BookingID: string = '/html/body/main/div/div[1]/div/form/div[1]/label';
    const Surname: string = '/html/body/main/div/div[1]/div/form/div[2]/label';
    const YearBorn: string = '/html/body/main/div/div[1]/div/form/div[3]/label';
    
    const BookingID_Visible: boolean = await isVisible(page, BookingID);
    const Surname_Visible: boolean = await isVisible(page, Surname);
    const YearBorn_Visible: boolean = await isVisible(page, YearBorn);
    console.log('User is redirected to Booking page successfully');

    // Step 4: Switch to Travel Agent Login
    const Agent_Login: string = 'body > main > div > a'; //used selector 
    await page.locator(Agent_Login).click();
    console.log('Clicked Switch to Travel Agent Login button successfully');

    // Step 5: Verify user is redirected to Agent Login page
    const ABTA: string = '/html/body/main/div/div[1]/div/form/div[1]/label';
    const Password: string = '/html/body/main/div/div[1]/div/form/div[2]/label';
    
    const ABTA_Visible: boolean = await isVisible(page, ABTA);
    const Password_Visible: boolean = await isVisible(page, Password);
    console.log('User is redirected to Agent Login Page successfully');
});
