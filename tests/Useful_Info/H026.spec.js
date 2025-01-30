/* This test is created to test the Useful Info > Travel Insurance page
Date: 30/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';
import { getTextAndCompare, isEnabled } from '../../pages/Helper_Functions';

test('Test Travel Insurance', async ({ page }) => {
    // Step 1: Navigate to Home Page
    await test.step('Navigate to Home Page', async () => {
        await page.goto('https://www.shearings.com');
        console.log('Navigated to Home Page');
    });

    // Step 2: Navigate to Useful Info > Travel Info
    await test.step('Click on Useful Info button', async () => {
        await Navigate_To_Useful_Info(page,'//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[14]/a/span');
        console.log('Navigated to Travel Insurance page');
    });

    // Step 3: Verify page title
    await test.step('Verify page title', async () => {
        await getTextAndCompare(page, '/html/body/section[2]/div/div[2]/div/h1', 'Hassle-free, screening-free travel insurance');
        console.log('Page title verified successfully.');
    });

    // Step 4: Verify desc
    await test.step('Verify description', async () => {
        await getTextAndCompare(page, '/html/body/section[2]/div/div[2]/div/h3', 'And it’s great value too!');
        await getTextAndCompare(page, '/html/body/section[2]/div/div[2]/div/p[1]', 'If you’re travelling to the UK, you can get travel insurance for free. And it’s great value too!');
        await getTextAndCompare(page, '/html/body/section[2]/div/div[2]/div/p', 'At Shearings, we’re all about making your holiday run as smooth as silk – but just in case life throws you a curveball, we highly recommend grabbing a holiday insurance policy to keep your finances safe and sound. Better safe than sorry!');
        console.log('Page description verified successfully.');
    });

    // Step 5: Verify page content
    await test.step('Verify page content', async () =>  {
        await getTextAndCompare(page,'/html/body/section[3]/div/div/div/p[1]','Our Client Holiday Travel Insurance is available to eligible passengers travelling on our holidays which is arranged by Wrightsure Services (Hampshire) Limited in conjunction with All Seasons Underwriting Agencies Limited and underwritten by Lloyd’s Syndicate 4444, which is managed by Canopius Managing Agents Limited. Registered Office: Floor 29, 22 Bishopsgate, London. EC2N 4BQ. Registered in England and Wales No. 01514453. Authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority. Firm Ref: 204847.');
        await getTextAndCompare(page,'/html/body/section[3]/div/div/div/p[2]','This insurance is available only to residents of the United Kingdom, Jersey, Gurnsey & the Isle of Man who purchase cover before they travel.');
        await getTextAndCompare(page,'/html/body/section[3]/div/div/div/p[3]','Wrightsure Services (Hampshire) Ltd is authorised and regulated by the Financial Conduct Authority (theirregistration number is 311394) and is permitted to advise on and arrange general insurance contracts. You can checkthese details online using the Financial Services Register (accessible from https://register.fca.org.uk) or by contacting the Financial Conduct Authority Consumer Helpline on 0800 1116768.');
        await getTextAndCompare(page,'/html/body/section[3]/div/div/div/p[4]','Should you wish to take out this travel insurance please include the appropriate premium when booking your holiday.');

        await getTextAndCompare(page,'/html/body/section[3]/div/div/div/p[5]','DEMANDS AND NEEDS');
        await getTextAndCompare(page,'/html/body/section[3]/div/div/div/p[6]','This insurance policy will suit the demands and needs of an individual or group (where applicable) who have no excluded medical condition(s), are travelling in countries included within the policy terms and who wish to insure themselves against unforeseen circumstances/events detailed in the cover section below. Subject to the terms, conditions and maximum specified sums insured.');
        
        await getTextAndCompare(page,'/html/body/section[3]/div/div/div/p[7]','IMPORTANT');
        await getTextAndCompare(page,'/html/body/section[3]/div/div/div/p[8]','We summarise below the details of the insurance cover provided which also includes 24-hour emergency service from Mayday Assistance Limited. The following is a summary of the cover available. Full details of cover and exclusions will be forwarded with your confirmation of booking. In any event you may ask for a specimen copy of the policy wording before booking should you wish to examine this in advance.');
        console.log('Page content verified successfully.');
    });

    // Step 6: Get row count and validate
    // await test.step('Get row count from the table and validate', async () => {
    //     const tableLocator = page.locator('xpath=/html/body/section[3]/div/div/div/table');
    //     const rows = tableLocator.locator('tbody tr');
    //     const rowCount = await rows.count();
    //     console.log(`Table has ${rowCount} rows`);

    //     // Define expected data based on your table structure
    //     const expectedData = [
    //         { Section: 'Cancellation or Curtailment Charges', 'Sum Insured Per Insured Person': 'Up to £5,000 UK', Excess: 'Nil under 3 days duration, 6 days & over £30' },
    //         { Section: 'Emergency Medical, Repatriation and Other Expenses', 'Sum Insured Per Insured Person': 'Up to £5,000,000 UK', Excess: '£75 (if GHIC held)' },
    //         { Section: 'Hospital Confinement Benefit', 'Sum Insured Per Insured Person': '£10 per 24 hours up to £100 UK', Excess: 'Nil' },
    //         { Section: 'Personal Accident', 'Sum Insured Per Insured Person': '£15,000 Item 1 Accidental Death (over 18)', Excess: 'Nil' },
    //         { Section: 'Travel delay and abandonment', 'Sum Insured Per Insured Person': '£20 per 12 hours delay up to £60', Excess: 'Nil' },
    //         { Section: 'Missed Departure', 'Sum Insured Per Insured Person': 'Up to £200 UK', Excess: 'Nil' },
    //         { Section: 'Baggae', 'Sum Insured Per Insured Person': 'Single Article/Pair/Set Limit £400', Excess: '£50' },
    //         { Section: 'Personal Money, Passport and Documents', 'Sum Insured Per Insured Person': 'Up to £500', Excess: 'Nil' },
    //         { Section: 'Personal Liability', 'Sum Insured Per Insured Person': 'Up to £2,000,000', Excess: 'Nil' },
    //         { Section: 'Legal Assistance and Expenses', 'Sum Insured Per Insured Person': 'Up to £25,000', Excess: '£250' },
    //         { Section: 'Mugging Benefit', 'Sum Insured Per Insured Person': '£50 for each full 24 hours spent in hospital up to £500', Excess: 'Nil' }
    //     ];

    //     // Check if actual row count matches expected row count
    //     if (rowCount !== expectedData.length) {
    //         console.warn(`Row count mismatch: expected ${expectedData.length}, got ${rowCount}`);
    //     }

    //     // Iterate through rows and validate content
    //     for (let i = 0; i < rowCount; i++) {
    //         const row = rows.nth(i);
    //         const cells = row.locator('td');

    //         const section = await cells.nth(0).innerText();
    //         const sumInsured = await cells.nth(1).innerText();
    //         const excess = await cells.nth(2).innerText();

    //         const expectedRow = expectedData[i];

    //         // Validate each row's content
    //         if (section !== expectedRow.Section || sumInsured !== expectedRow['Sum Insured Per Insured Person'] || excess !== expectedRow.Excess) {
    //             console.warn(`Mismatch in row ${i + 1}:`);
    //             console.warn(`Expected: ${JSON.stringify(expectedRow)}`);
    //             console.warn(`Actual: { Section: '${section}', 'Sum Insured Per Insured Person': '${sumInsured}', Excess: '${excess}' }`);
    //         } else {
    //             console.log(`Row ${i + 1} is correct.`);
    //         }
    //     }
    // });

});