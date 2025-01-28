/* Description: This test is created to test My Booking button
Date: 03/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');
const { HomePage, isVisible } = require('../../pages/Helper_Functions.js');

test('Test My Booking', async ({ page }) => {
    // Instantiate the HomePage class
    const homePage = new HomePage(page);

    // Step 1: Navigate to Home Page    
    await test.step('Navigate to Home Page', async () => {
        await homePage.goToHomePage();
        console.log('Navigated to Home Page');
    });

    // Step 2: Click on My Booking button
    await test.step('Click on My Booking button', async () => {
        const myBookingButton = '//*[@id="top"]/div[1]/div/ul/li[3]/a';
        await page.locator(myBookingButton).click();
        console.log('Clicked on My Booking button');
    });

    // Step 3: Verify user is redirected to My Booking page
    await test.step('Verify My Booking page elements', async () => {
        await isVisible(page, '/html/body/main/div/div[1]/div/form/div[1]/label');
        await isVisible(page, '/html/body/main/div/div[1]/div/form/div[2]/label'); 
        await isVisible(page, '/html/body/main/div/div[1]/div/form/div[3]/label');
        console.log('User is redirected to My Booking page successfully and the required elements are visible.');
    });

    // Step 4: Switch to Travel Agent Login
    await test.step('Switch to Travel Agent Login', async () => {
        const Agent_Login = 'body > main > div > a'; // Use a reliable selector
        await page.locator(Agent_Login).click();
        console.log('Clicked Switch to Travel Agent Login button successfully');
    });

    // Step 5: Verify user is redirected to Agent Login page
    await test.step('Verify Agent Login page elements', async () => {
        const ABTA = '/html/body/main/div/div[1]/div/form/div[1]/label';
        const Password = '/html/body/main/div/div[1]/div/form/div[2]/label';

        await expect(page.locator(ABTA)).toBeVisible();
        await expect(page.locator(Password)).toBeVisible();
        console.log('User is redirected to Agent Login Page successfully and the required elements are visible.');
    });
});
