/* Description: This test script verifies the Destinations > UK
Date: 13/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Destinations } from '../../pages/Destinations_Functions';
import { click, getTextAndCompare, isVisible, urlContains } from '../../pages/Helper_Functions';

test('Test Last minute holidays', async ({ page }) => {

    // Navigate to UK
    await Navigate_To_Destinations(page, '//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[3]/div[1]/a/span');
    await urlContains(page, 'uk');
    console.log('Navigated to UK, URL verified');

    // Verifying headers
    // header1 = /html/body/section[2]/div[1]/ul/li[1]/a
    for(let i = 1; i <= 4; i++){
        const header = `/html/body/section[2]/div[1]/ul/li[${i}]/a`;
        await isVisible(page, header);
        console.log(`Header ${i} verified`);
    }

});