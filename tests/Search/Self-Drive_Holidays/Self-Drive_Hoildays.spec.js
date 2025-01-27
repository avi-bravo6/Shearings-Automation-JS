/* 
Description: This test script is created to test Self-Drive Holiday search functionality via option selection
Date: 27/01/2025
Created by: Avi 
*/

import { test, expect } from '@playwright/test';
import { visibleAndClick, getTextAndCompare,fillInput } from '../../pages/Helper_Functions';

test('Self-Drive_Hoildays', async ({ page }) => {
    
    //Step 1: Navigate to website
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Coach Holiday page');

    //Step 2: Select Arrival month
    

});