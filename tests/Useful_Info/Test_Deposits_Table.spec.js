/* Description: This test script is created to test the Deposits table
Date: 08/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import allure from 'allure-commandline';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';

test('Test Deposits Table', async ({ page }) => {
    test.setTimeout(5000); // Set timeout to 5 seconds for the test

    // Step 1: Navigate to Deposits page
    await allure.step('Navigate to Deposits page', async () => {
        await Navigate_To_Useful_Info(page, '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[4]/a/span');
        console.log('Navigated to Deposits page');
    });

    // Step 2: Wait for the table to load
    await allure.step('Wait for the Deposits table to load', async () => {
        const tableLocator = page.locator('xpath=/html/body/section[2]/div/section/div/div/div/table');
        await tableLocator.waitFor({ state: 'visible', timeout: 20000 });
        console.log('Table is visible on the page');
    });

    // Step 3: Get row count and validate
    await allure.step('Get row count from the table and validate', async () => {
        const tableLocator = page.locator('xpath=/html/body/section[2]/div/section/div/div/div/table');
        const rows = tableLocator.locator('tbody tr');
        const rowCount = await rows.count();
        console.log(`Table has ${rowCount} rows`);

        const expectedData = [
            { HolidayType: 'Coach Holidays (UK)', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
            { HolidayType: 'Coach Holidays (Europe)', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '75 days before departure' },
            { HolidayType: 'Self-Drive Holidays', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
            { HolidayType: 'Self-Drive Experiences', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
            { HolidayType: 'River Cruises', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' },
            { HolidayType: 'Sea Cruises', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' },
            { HolidayType: 'Ticketed Events', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' }
        ];

        // Verify the row count matches the expected data
        if (rowCount !== expectedData.length) {
            allure.addAttachment('Row Count Mismatch', `Expected ${expectedData.length} rows, but got ${rowCount}`);
            console.warn(`Row count mismatch: expected ${expectedData.length}, got ${rowCount}`);
        }
    });

    // Step 4: Validate table content row by row
    await allure.step('Validate table content row by row', async () => {
        const tableLocator = page.locator('xpath=/html/body/section[2]/div/section/div/div/div/table');
        const rows = tableLocator.locator('tbody tr');
        const expectedData = [
            { HolidayType: 'Coach Holidays (UK)', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
            { HolidayType: 'Coach Holidays (Europe)', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '75 days before departure' },
            { HolidayType: 'Self-Drive Holidays', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
            { HolidayType: 'Self-Drive Experiences', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
            { HolidayType: 'River Cruises', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' },
            { HolidayType: 'Sea Cruises', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' },
            { HolidayType: 'Ticketed Events', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' }
        ];

        for (let i = 0; i < expectedData.length; i++) {
            const cells = rows.nth(i).locator('td');
            
            // Wait for each cell to be visible before reading it
            await cells.first().waitFor({ state: 'visible', timeout: 10000 });

            const holidayType = (await cells.nth(0).textContent())?.trim() || '';
            const superLowDeposit = (await cells.nth(1).textContent())?.trim() || '';
            const lowDeposit = (await cells.nth(2).textContent())?.trim() || '';
            const fullDeposit = (await cells.nth(3).textContent())?.trim() || '';
            const balanceDue = (await cells.nth(4).textContent())?.trim() || '';

            const expectedRow = expectedData[i];
            console.log(`Validating row ${i + 1}`);
            allure.addAttachment(`Row ${i + 1} - Expected Values`, `HolidayType: ${expectedRow.HolidayType}, SuperLowDeposit: ${expectedRow.SuperLowDeposit}, LowDeposit: ${expectedRow.LowDeposit}, FullDeposit: ${expectedRow.FullDeposit}, BalanceDue: ${expectedRow.BalanceDue}`);
            
            expect(holidayType).toBe(expectedRow.HolidayType);
            expect(superLowDeposit).toBe(expectedRow.SuperLowDeposit);
            expect(lowDeposit).toBe(expectedRow.LowDeposit);
            expect(fullDeposit).toBe(expectedRow.FullDeposit);
            expect(balanceDue).toBe(expectedRow.BalanceDue);
        }
    });

    console.log('Table content verified successfully');
});
