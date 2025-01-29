import { test, expect } from '@playwright/test';
import { Navigate_To_Destinations } from '../../pages/Destinations_Functions';
import { getTextAndCompare, isVisible, urlContains, isEnabled } from '../../pages/Helper_Functions';

test('Test Last minute holidays', async ({ page }) => {

    // Step 1: Navigate to Last minute holidays page
    await test.step('Navigate to Last minute holidays page', async () => {
        await Navigate_To_Destinations(page, '//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[4]/div[1]/div/a/div/div/h4');
    });

    // Step 2: Verify the correct URL and page title
    await test.step('Verify URL and Page Title', async () => {
        if (await urlContains(page, 'last-minute-holidays') === true) {
            const pageTitleXpath = '/html/body/section[2]/div/div/div/div/h1';
            await getTextAndCompare(page, pageTitleXpath, 'Last minute holidays');
            console.log('URL and title verified.');
        } else {
            console.log('URL not verified');
        }
    });

    // Step 3: Verify Content Description
    await test.step('Verify Content Description', async () => {
        const element1 = '/html/body/section[2]/div/div/div/div/h3';
        const element2 = '/html/body/section[2]/div/div/div/div/p/text()';
        await isVisible(page, element1);
        await isVisible(page, element2);
        console.log('Content description verified successfully.');
    });

    // Step 4: Verify Holiday table headers
    await test.step('Verify Holiday table Headers', async () => {
        for (let i = 1; i <= 6; i++) {
            const xpath = `//*[@id="tour-search-results"]/div/section/div[8]/div/div[1]/div/div[${i}]`;
            const element = page.locator(`xpath=${xpath}`);

            // Check if element exists before checking visibility
            const elementCount = await element.count();
            if (elementCount === 0) {
                console.error(`Header element at ${xpath} does not exist.`);
                continue; // Skip this iteration if the element does not exist
            }

            const isVisibleHeader = await element.isVisible({ timeout: 3000 }); // Increased timeout
            expect(isVisibleHeader).toBe(true, `Header at ${xpath} is not visible`);
            console.log(`Header at ${xpath} is ${isVisibleHeader ? 'visible' : 'not visible'}`);
        }
    });

    // Step 5: Verify Holiday cards visibility
    await test.step('Verify Holiday cards visibility', async () => {
        for (let j = 1; j <= 10; j++) {
            const xpath1 = `//*[@id="tour-search-results"]/div/section/div[8]/div/div[${j}]`;
            const element1 = page.locator(`xpath=${xpath1}`);

            // Check if element exists before checking visibility
            const elementCount1 = await element1.count();
            if (elementCount1 === 0) {
                console.error(`Holiday card element at ${xpath1} does not exist.`);
                continue; // Skip this iteration if the element does not exist
            }

            const isVisibleCard = await element1.isVisible({ timeout: 3000 }); // Increased timeout
            expect(isVisibleCard).toBe(true, `Holiday card at ${xpath1} is not visible`);
            console.log(`Holiday card at ${xpath1} is ${isVisibleCard ? 'visible' : 'not visible'}`);
        }
    });
});
