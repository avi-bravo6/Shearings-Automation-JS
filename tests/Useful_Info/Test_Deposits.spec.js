/* Description: This test script is created to test the Car Parking table > Hotle Links
Date: 07/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';

test('Test Deposits', async ({ page }) => {
    // Step 1: Navigate to Deposits
    await Navigate_To_Useful_Info(page, '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[4]/a/span');
    console.log('Navigated to Deposits');

    // Step 2: Wait for the table to be visible
     const tableLocator = page.locator('xpath=/html/body/section[2]/div/section/div/div/div/table');
    await tableLocator.waitFor({ state: 'visible', timeout: 10000 });
    console.log(`Table has ${rowCount} rows`);

    // Step 2: Wait for the table to be visible
const tableLocator = page.locator('xpath=/html/body/section[2]/div/section/div/div/div/table');
await tableLocator.waitFor({ state: 'visible', timeout: 10000 });
console.log('Table is visible on the page');

// Debug table content
const tableHTML = await tableLocator.innerHTML();
console.log(`Table HTML: ${tableHTML}`);

// Locate rows
const rows = tableLocator.locator('tbody tr');

// Wait for at least one row to be visible (if dynamically loaded)
if (await rows.count() === 0) {
    console.error('Table rows are not loaded yet.');
    await rows.first().waitFor({ state: 'visible', timeout: 10000 });
}


    // Define the expected data for validation (update based on your table content)
    const expectedData = [
        { HolidayType: 'Coach Holidays (UK)', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
        { HolidayType: 'Coach Holidays (Europe)', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '75 days before departure' },
        { HolidayType: 'Self-Drive Holidays', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
        { HolidayType: 'Self-Drive Experiences', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
        { HolidayType: 'River Cruises', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' },
        { HolidayType: 'Sea Cruises', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' },
        { HolidayType: 'Ticketed Events', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' }
    ];

    // Step 3: Validate each row
    for (let i = 0; i < rowCount; i++) {
        const cells = rows.nth(i).locator('td');
        const holidayType = await cells.nth(0).textContent();
        const superLowDeposit = await cells.nth(1).textContent();
        const lowDeposit = await cells.nth(2).textContent();
        const fullDeposit = await cells.nth(3).textContent();
        const balanceDue = await cells.nth(4).textContent();

        const expectedRow = expectedData[i];
        console.log(`Validating row ${i + 1}`);
        expect(holidayType.trim()).toBe(expectedRow.HolidayType);
        expect(superLowDeposit.trim()).toBe(expectedRow.SuperLowDeposit);
        expect(lowDeposit.trim()).toBe(expectedRow.LowDeposit);
        expect(fullDeposit.trim()).toBe(expectedRow.FullDeposit);
        expect(balanceDue.trim()).toBe(expectedRow.BalanceDue);
    }
    console.log('Table content verified successfully');

});