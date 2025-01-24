/* Description: This test script verifies the Destinations > UK
Date: 13/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Destinations } from '../../pages/Destinations_Functions';
import { click, getTextAndCompare, isEnabled, isVisible, urlContains } from '../../pages/Helper_Functions';

test('Test Last minute holidays', async ({ page }) => {

    // Navigate to UK
    await Navigate_To_Destinations(page, '//*[@id="top"]/div[6]/nav/div/ul/li[2]/div/div/div[3]/div[1]/a/span');
    await urlContains(page, 'uk');
    console.log('Navigated to UK, URL verified');

    // Verifying banner
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

    // Verifying headers
    for(let i = 1; i <= 4; i++){
        const header = `/html/body/section[2]/div[1]/ul/li[${i}]/a`;
        await isVisible(page, header);
        console.log(`Header ${i} verified`);
    }

    // Verifying sidebanner
    if(await isVisible(page, '/html/body/section[2]/div[2]/div[2]/div[2]/div/div/div')) {
    getTextAndCompare(page, '/html/body/section[2]/div[2]/div[2]/div[2]/div/div/div/h4/span', 'Single rooms, sorted in seconds!');
    getTextAndCompare(page,'/html/body/section[2]/div[2]/div[2]/div[2]/div/div/div/p', "If you're in need of a single room, all your options are lined up and ready to browse.");
    const Have_a_look = '/html/body/section[2]/div[2]/div[2]/div[2]/div/div/div/a';
    await isVisible(page, Have_a_look);
    console.log('Sidebanner verified');}
    else {console.log('Sidebanner element missing');}
    
    // Verify camera icon
    isVisible(page,'/html/body/section[2]/div[2]/div[2]/div[1]/div[2]/div/div/a');
    console.log('Camera icon verified');

    // Verify pagetitle
    const pageTitleXpath = '/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/h1';
    await isVisible(page, pageTitleXpath);
    const pageTitle2 = '/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/h3';
    await isVisible(page, pageTitle2);
    console.log('Page title verified');

    // Verify page desc
    await getTextAndCompare(page, '/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/p[1]', 'Forget plane ticket prices – there’s a world of adventures waiting for you just down the road! The UK’s iconic landmarks and scenic wonders are just a hop, skip and a jump away (well, maybe not jump, unless you’re feeling energetic)! ');
    await getTextAndCompare(page, '/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/p[2]', 'Skipping stones is more your speed? Torquay, Bournemouth and Llandudno offer rustic coastlines and a fresh sea breeze. Or, if you like to take it slow, you could take a stroll through the Lake District or gawk at the beauty of the Scottish Highlands. For some serious ‘wow’ factor, you can add the Giant’s Causeway onto your bucket list – Mother Nature is just so fascinating! ');
    await getTextAndCompare(page, '/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/p[3]', 'Whether you choose a short break, a weekend jaunt or a city exploration, Shearings has the perfect UK coach holiday for you!');
    console.log('Page description verified');
    
    // verify contents
    const element0 = '/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/div/h3/span';
    await getTextAndCompare(page, element0, 'Single rooms, sorted in seconds!');
    console.log('Heading verified');

    for(let i = 1; i <= 6; i++){
        const element1 = `/html/body/section[2]/div[2]/div[2]/div[1]/div[1]/div/ul/li[${i}]`;
        await isVisible(page, element1);
        console.log(`Element ${i} verified`);
    }

    // Verify tabs
    for(let i = 1; i <= 3; i++){
        const tab = `//*[@id="elasticSearchFiltersTabs"]/li[${i}]`;
        await isVisible(page, tab);
        console.log(`Tab ${i} verified`);
    }

    // Verify header
    const header = '//*[@id="tour-search-results"]/div/section/div[6]/p';
    await isVisible(page, header);
    console.log('Header verified');

    // Verify Sorting option
    const sorting_lable = '//*[@id="tour-search-results"]/div/section/div[4]/div/label/span[1]';
    await isVisible(page, sorting_lable);
    await getTextAndCompare(page, sorting_lable, 'Sort By:');
    console.log('Sorting option verified');

    // Verify Filter Holidays section
    const Filter_section = '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[1]';
    await isVisible(page, Filter_section);
    await getTextAndCompare(page, Filter_section, 'Filter Holidays');
    console.log('Filter Holidays section verified');

    // Verify lables
    for(let i = 1; i <= 7; i++){    
        const filter_holidays_lable = `//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[${i}]/span[2]`;
        await isVisible(page, filter_holidays_lable);
        console.log(`lable ${i} verified`);
    }

    // Verify Clear all buttons
    const clear_all_filters = '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[9]/button';
    await isVisible(page, clear_all_filters);
    await getTextAndCompare(page, clear_all_filters,'Clear all filters');
    console.log('Clear all filters');

    // Verify holiday cards
    const holiday_card = '//*[@id="tour-search-results"]/div/section/div[8]/div/div[1]';
});