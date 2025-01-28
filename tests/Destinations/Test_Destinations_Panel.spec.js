import { test, expect } from '@playwright/test';
import { Navigate_To_Destinations } from '../../pages/Destinations_Functions';
import { getTextAndCompare, isVisible, urlContains, isEnabled, click } from '../../pages/Helper_Functions';

test('Test Destinations Panel', async ({ page }) => {

    // Step 1: Navigate to Home Page
    await test.step('Navigate to Home Page', async () => {
        await page.goto('https://www.shearings.com');
        console.log('Navigated to Home Page');
    });

    // Step 2: Click on Destinations button
    await test.step('Click on Destinations button', async () => {
        const destinationsButton = '//*[@id="top"]/div[6]/nav/div/ul/li[2]/button';
        await isVisible(page, destinationsButton);
        await click(page, destinationsButton);
        console.log('Clicked on Destinations button');
    });

    // Step 3: Verify the Destinations panel content
    await test.step('Verify Destinations title and contents', async () => {
        await getTextAndCompare(page, '//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[1]/div[1]/span', 'Destinations');
        console.log('Destinations title verified');
        await getTextAndCompare(page,'//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[3]/div[1]/a','UK');
        console.log('UK heading verified');
        
        // Verify the list items for UK
        for(let i = 1; i <= 5; i++){
            const list1 = `//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[3]/div[1]/ul/li[${i}]`;
            await isVisible(page, list1);
            console.log(`List item ${i} verified`);
        }

        await getTextAndCompare(page,'//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[3]/div[2]/a','Europe');
        console.log('Europe heading verified');
        
        // Verify the list items for Europe
        for(let j = 1; j <= 12; j++){
            const list2 = `//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[3]/div[2]/ul/li[${j}]`;
            await isVisible(page, list2);
            console.log(`List item ${j} verified`);
        }
    });

    // Step 4: Verify banners
    await test.step('Verify Banners', async () => {
        await getTextAndCompare(page,'//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[4]/div[1]/div/a/div/div/h4','Feeling spontaneous?Grab a last-minute holiday!');
        console.log('Banner 1 verified');
        await getTextAndCompare(page,'//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[4]/div[2]/div/a/div[2]/div/h4','Espresso’ yourself in Italy from £749pp');
        console.log('Banner 2 verified');
        await getTextAndCompare(page,'//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[4]/div[3]/div/a/div[2]/div/h4','Your hassle-free Scottish adventure is waiting from £99pp');
        console.log('Banner 3 verified');
    });

    // Step 5: Click on Close button
    await test.step('Click on Close button', async () => {
        const closeButton = '//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[1]/div[3]/button';
        await isVisible(page, closeButton);
        await click(page, closeButton);
        console.log('Clicked on Close button');
    });

    console.log('Verified Destinations panel elements successfully');
});
