import { test, expect } from '@playwright/test';
import { Navigate_To_Destinations } from '../../pages/Destinations_Functions';
import { getTextAndCompare, isVisible, urlContains, isEnabled } from '../../pages/Helper_Functions';

test('Test Destinations > Discover all Destinations', async ({ page }) => {

    // Step 1: Navigate to Destinations > Discover all Destinations page
    await test.step('Navigate to Destinations > Discover all Destinations page', async () => {
        await Navigate_To_Destinations(page, '//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[1]/div[2]/a');
    });

    // Step 2: Verify the correct URL is loaded
    await test.step('Verify the URL contains "all-destinations"', async () => {
        const urlContainsDestinations = await urlContains(page, 'all-destinations');
        expect(urlContainsDestinations).toBe(true);
    });

    // Step 3: Verify Page Title
    await test.step('Verify Page Title is correct', async () => {
        const pageTitleXpath = '/html/body/section[2]/div/div/div[1]/h1';
        await getTextAndCompare(page, pageTitleXpath, 'Destinations for your wish-list');
    });

    // Step 4: Verify page content
    await test.step('Verify page content elements', async () => {
        const desc1 = '/html/body/section[2]/div/div/div[1]/h3';
        const desc2 = '/html/body/section[2]/div/div/div[1]/p/text()';
        const desc3 = '//*[@id="destinations"]/section/div/div/div[1]/h2';
        const desc4 = '//*[@id="destinations"]/section/div/div/div[1]/p/text()';
        
        await isVisible(page, desc1);
        await isVisible(page, desc2);
        await isVisible(page, desc3);
        await isVisible(page, desc4);
    });

    // Step 5: Verify Holiday Cards visibility
    await test.step('Verify Holiday cards visibility', async () => {
        for (let i = 1; i <= 15; i++) {
            const xpath = `//*[@id="destinations"]/section/div/div/div[2]/div/div[${i}]`;
            await isVisible(page, xpath);
            console.log(`Holiday Card ${i} verified`);
        }
    });

});
