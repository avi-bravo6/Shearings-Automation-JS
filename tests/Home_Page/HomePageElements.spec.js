import { test, expect, Page } from '@playwright/test';
import { getText, isEnabled, isVisible, getTextAndCompare } from '../../pages/Helper_Functions';

// Verify Home Page header elements
test('Verify Home Page header elements', async ({ page }) => {

    // Step 1: Open the homepage
    await test.step('Open Homepage', async () => {
        await page.goto('https://www.shearings.com/');
        console.log('Homepage opened');
    });

    // Step 2: Check Logo visibility and clickability
    await test.step('Check Logo', async () => {
        const logo = '//*[@id="top"]/div[4]/a';
        if (await isVisible(page, logo)) {
            await isEnabled(page, logo);
            console.log('Logo is visible and clickable');
        } else {
            console.log('Logo missing');
        }
    });

    // Step 3: Check Home Page Button visibility and clickability
    await test.step('Check Home Page Button', async () => {
        const homePageButton = '//*[@id="top"]/div[6]/nav/div/ul/li[1]/a';
        if (await isVisible(page, homePageButton)) {
            await isEnabled(page, homePageButton);
            console.log('Home Page Button is visible and clickable');
        } else {
            console.log('Home Page Button missing');
        }
    });

    // Step 4: Check other header buttons (Brochure Request, Opening Times, etc.)
    await test.step('Check Header Buttons', async () => {
        for (let i = 1; i <= 4; i++) {
            const button = `//*[@id="top"]/div[1]/div/ul/li[${i}]/a`;
            if (await isVisible(page, button)) {
                await isEnabled(page, button);
                console.log(`Button ${i} is visible and clickable`);
            } else {
                console.log(`Button ${i} missing`);
            }
        }
    });

    // Step 5: Check Destinations, Holidays, Useful Info and Search Page buttons
    await test.step('Check Destinations, Holidays, etc. Tabs', async () => {
        for (let i = 2; i <= 5; i++) {
            const tab = `//*[@id="top"]/div[6]/nav/div/ul/li[${i}]/button`;
            if (await isVisible(page, tab)) {
                await isEnabled(page, tab);
                console.log(`Page ${i} is visible and clickable`);
            } else {
                console.log(`Page ${i} missing`);
            }
        }
    });

    // Step 6: Check Coach Holidays, Self Drive Holidays and River Cruise Search Tabs
    await test.step('Check Search Tabs', async () => {
        for (let i = 1; i <= 3; i++) {
            const search = `//*[@id="elasticSearchFiltersTabs"]/li[${i}]/a`;
            if (await isVisible(page, search)) {
                await isEnabled(page, search);
                console.log(`Search Tab ${i} is visible and clickable`);
            } else {
                console.log(`Search Tab ${i} missing`);
            }
        }
    });

    // Step 7: Check cover and image in oneEuro section
    await test.step('Check Cover and One Euro Image', async () => {
        await isVisible(page, '/html/body/section[1]/div[4]');
        await isVisible(page, '/html/body/section[1]/div[5]');
        const oneEuro = '/html/body/section[1]/div[6]/div';
        const hasImage = await page.locator(`xpath=${oneEuro}//img`).first().isVisible();  
        console.log(`Does ${oneEuro} contain an image? ${hasImage}`);
    });

    // Step 8: Verify hassle-free promise banner
    await test.step('Verify Hassle-Free Promise Banner', async () => {
        const h_banner = 'xpath=/html/body/section[1]/div[8]/div/div';
        const h_banner_image = '/html/body/section[1]/div[8]/div/div/div/img';
        const h_banner_title = '/html/body/section[1]/div[8]/div/div/div/h6';
        if (await page.isVisible(h_banner)) {
            await isVisible(page, h_banner_image);
            await isVisible(page, h_banner_title);
            for (let i = 1; i <= 3; i++) {
                const desc = `/html/body/section[1]/div[8]/div/div/div/ul/li[${i}]/text()`;
                await isVisible(page, desc);
            }
            console.log('Hassle-Free Promise Banner verified');
        } else {
            console.log('Hassle-Free Promise Banner not visible');
        }
    });

    // Step 9: Verify Craving a getaway? section
    await test.step('Verify "Craving a getaway?" Section', async () => {
        if (await isVisible(page, '/html/body/section[2]/div/div/div/p')) {
            await getTextAndCompare(page, '/html/body/section[2]/div/div/div/p/span[1]', 'Craving a getaway?');
            await getTextAndCompare(page, '/html/body/section[2]/div/div/div/p/span[2]', 'Satisfy your appetite with a last-minute holiday!');
            await isVisible(page, '/html/body/section[2]/div/div/div/a');
            console.log('"Craving a getaway?" section verified');
        } else {
            console.log('"Craving a getaway?" section missing');
        }
    });
});
