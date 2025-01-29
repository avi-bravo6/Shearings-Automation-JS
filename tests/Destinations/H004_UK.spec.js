import { test, expect } from '@playwright/test';
import { Navigate_To_Destinations } from '../../pages/Destinations_Functions';
import { click, getTextAndCompare, isEnabled, isVisible, urlContains } from '../../pages/Helper_Functions';

test('Test Destinations > UK', async ({ page }) => {

    // Step 1: Navigate to UK
    await test.step('Navigate to UK', async () => {
        await Navigate_To_Destinations(page, '//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[3]/div[1]/a/span');
        await urlContains(page, 'uk');
        console.log('Navigated to UK, URL verified');
    });

    // Step 2: Verifying banner
    await test.step('Verify banner', async () => {
        const banner = '/html/body/section[2]/div[2]/div[1]/div';
        if(await isVisible(page, banner)){
            await getTextAndCompare(page, '/html/body/section[2]/div[2]/div[1]/div/div/h6/text()', 'Our hand-on-heart,');
            await getTextAndCompare(page, '/html/body/section[2]/div[2]/div[1]/div/div/h6/span', 'hassle-free promise');
            for(let i = 1; i <= 3; i++){
                const desc = `/html/body/section[2]/div[2]/div[1]/div/div/ul/li[${i}]/text()`;
                await isVisible(page, desc);
            }
        }
        console.log('Banner verified');
    });

    // Step 3: Verifying headers
    await test.step('Verify headers', async () => {
        for(let i = 1; i <= 4; i++){
            const header = `/html/body/section[2]/div[1]/ul/li[${i}]/a`;
            await isVisible(page, header);
            console.log(`Header ${i} verified`);
        }
    });

    // Step 4: Verifying side banner
    await test.step('Verify side banner', async () => {
        if(await isVisible(page, '/html/body/section[2]/div[2]/div[2]/div[2]/div/div/div')) {
            await getTextAndCompare(page, '/html/body/section[2]/div[2]/div[2]/div[2]/div/div/div/h4/span', 'Single rooms, sorted in seconds!');
            await getTextAndCompare(page,'/html/body/section[2]/div[2]/div[2]/div[2]/div/div/div/p', "If you're in need of a single room, all your options are lined up and ready to browse.");
            const Have_a_look = '/html/body/section[2]/div[2]/div[2]/div[2]/div/div/div/a';
            await isVisible(page, Have_a_look);
            console.log('Side banner verified');
        } else {
            console.log('Side banner element missing');
        }
    });

    // Step 5: Verify camera icon
    await test.step('Verify camera icon', async () => {
        await isVisible(page,'/html/body/section[2]/div[2]/div[2]/div[1]/div[2]/div/div/a');
        console.log('Camera icon verified');
    });

    // Step 6: Verify page title
    await test.step('Verify page title', async () => {
        const pageTitleXpath = '/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/h1';
        await isVisible(page, pageTitleXpath);
        const pageTitle2 = '/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/h3';
        await isVisible(page, pageTitle2);
        console.log('Page title verified');
    });

    // Step 7: Verify page description
    await test.step('Verify page description', async () => {
        await getTextAndCompare(page, '/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/p[1]', 'Forget plane ticket prices – there’s a world of adventures waiting for you just down the road! The UK’s iconic landmarks and scenic wonders are just a hop, skip and a jump away (well, maybe not jump, unless you’re feeling energetic)! ');
        await getTextAndCompare(page, '/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/p[2]', 'Skipping stones is more your speed? Torquay, Bournemouth and Llandudno offer rustic coastlines and a fresh sea breeze. Or, if you like to take it slow, you could take a stroll through the Lake District or gawk at the beauty of the Scottish Highlands. For some serious ‘wow’ factor, you can add the Giant’s Causeway onto your bucket list – Mother Nature is just so fascinating! ');
        await getTextAndCompare(page, '/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/p[3]', 'Whether you choose a short break, a weekend jaunt or a city exploration, Shearings has the perfect UK coach holiday for you!');
        console.log('Page description verified');
    });

    // Step 8: Verify contents
    await test.step('Verify contents', async () => {
        const element0 = '/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/div/h3/span';
        await getTextAndCompare(page, element0, 'Single rooms, sorted in seconds!');
        console.log('Heading verified');

        for(let i = 1; i <= 6; i++){
            const element1 = `/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/div/ul/li[${i}]`;
            await isVisible(page, element1);
            console.log(`Element ${i} verified`);
        }
    });

    // Step 9: Verify tabs
    await test.step('Verify tabs', async () => {
        for(let i = 1; i <= 3; i++){
            const tab = `//*[@id="elasticSearchFiltersTabs"]/li[${i}]`;
            await isVisible(page, tab);
            console.log(`Tab ${i} verified`);
        }
    });

    // Step 10: Verify header
    await test.step('Verify header', async () => {
        const header = '//*[@id="tour-search-results"]/div/section/div[6]/p';
        await isVisible(page, header);
        console.log('Header verified');
    });

    // Step 11: Verify Sorting option
    await test.step('Verify Sorting option', async () => {
        const sorting_lable = '//*[@id="tour-search-results"]/div/section/div[4]/div/label/span[1]';
        await isVisible(page, sorting_lable);
        await getTextAndCompare(page, sorting_lable, 'Sort By:');
        console.log('Sorting option verified');
    });

    // Step 12: Verify Filter Holidays section
    await test.step('Verify Filter Holidays section', async () => {
        const Filter_section = '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[1]';
        await isVisible(page, Filter_section);
        await getTextAndCompare(page, Filter_section, 'Filter Holidays');
        console.log('Filter Holidays section verified');
    });

    // Step 13: Verify labels
    await test.step('Verify labels', async () => {
        for(let i = 1; i <= 7; i++){    
            const filter_holidays_lable = `//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[${i}]/span[2]`;
            await isVisible(page, filter_holidays_lable);
            console.log(`Label ${i} verified`);
        }
    });

    // Step 14: Verify Clear all buttons
    await test.step('Verify Clear all buttons', async () => {
        const clear_all_filters = '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[9]/button';
        await isVisible(page, clear_all_filters);
        await getTextAndCompare(page, clear_all_filters,'Clear all filters');
        console.log('Clear all filters verified');
    });

    // Step 15: Verify holiday cards
    await test.step('Verify holiday cards', async () => {
        const holiday_card = '//*[@id="tour-search-results"]/div/section/div[8]/div/div[1]';
        // Verify card (additional validation could be added here)
        await isVisible(page, holiday_card);
        console.log('Holiday card verified');
    });
});
