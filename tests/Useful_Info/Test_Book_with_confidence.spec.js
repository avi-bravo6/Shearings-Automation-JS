/* Description: This test script is created to test the Book with confidence page
Date: 08/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare, click, isVisible, urlContains } from '../../pages/Helper_Functions';

test('Test Book with confidence', async ({ page }) => {

    // Navigate to Book with confidence page
    await Navigate_To_Useful_Info(page, '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[11]/a/span');
    if(urlContains(page, 'pricing-policy')) {
        console.log('Navigated to Book with confidence page');
    } else {
        console.log('Navigated to incorrect page');
    }

});