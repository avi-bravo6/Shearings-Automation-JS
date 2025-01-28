/* Description: This test script is created to test the Agent Login button functionality
Date: 06/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');
const { HomePage, isVisible, urlContains, getText } = require('../../pages/Helper_Functions.js');

test('Test Agent Login functionality', async ({ page }) => {

    // Instantiate the HomePage class
    const homePage = new HomePage(page);

    // Step 1: Navigate to Home Page
    await test.step('Navigate to Home Page', async () => {
        await homePage.goToHomePage();
        console.log('Navigated to Home Page');
    });

    // Step 2: Verify Agent Login button is visible and clickable
    await test.step('Verify Agent Login Button', async () => {
        const agentLoginButton = '//*[@id="top"]/div[1]/div/ul/li[4]/a'; 
        const isAgentLoginVisible = await isVisible(page, agentLoginButton);
        
        if (!isAgentLoginVisible) {
            throw new Error('Agent Login button is not visible.');
        }
        console.log('Agent Login button is visible');
        
        // Click the Agent Login button
        await page.locator(agentLoginButton).click();
        console.log('Clicked on Agent Login button');
    });

    // Step 3: Verify user is navigated to the Travel Agent Login page
    await test.step('Verify Navigation to Travel Agent Login Page', async () => {
        const urlContainsText = 'agents/login';
        const isUrlCorrect = await urlContains(page, urlContainsText);
        
        if (!isUrlCorrect) {
            throw new Error('User is not navigated to the Travel Agent Login page.');
        }
        console.log('Navigated to Travel Agent Login page successfully');
    });

    // Step 4: Verify login form fields (First Name, ABTA Code, Password)
    await test.step('Verify Login Form Fields', async () => {
        const firstNameXpath = '/html/body/section[3]/div/div/div/form/label[1]/span[1]'; 
        const abtaCodeXpath = '/html/body/section[3]/div/div/div/form/label[2]/span[1]';  
        const passwordXpath = '/html/body/section[3]/div/div/div/form/label[3]/span[1]';  

        const isFirstNameVisible = await isVisible(page, firstNameXpath);
        if (isFirstNameVisible) {
            console.log('First Name field is visible');
        } else {
            console.log('First Name field is not visible');
        }

        const isABTACodeVisible = await isVisible(page, abtaCodeXpath);
        if (isABTACodeVisible) {
            console.log('ABTA Code field is visible');
        } else {
            console.log('ABTA Code field is not visible');
        }

        const isPasswordVisible = await isVisible(page, passwordXpath);
        if (isPasswordVisible) {
            console.log('Password field is visible');
        } else {
            console.log('Password field is not visible');
        }
    });

});
