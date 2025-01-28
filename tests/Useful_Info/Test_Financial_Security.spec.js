/* Description: This test script is created to test the Financial Security Page
Date: 08/01/2025
Created by: Avi */

import { test, expect } from '@playwright/test';
import allure from 'allure-commandline';
import { Navigate_To_Useful_Info } from '../../pages/Useful_Info_Functions';

test('Test Financial Security Page', async ({ page }) => {
    test.setTimeout(120000); // Set timeout to 2 minutes for the test

    // Step 1: Navigate to Financial Security page
    await allure.step('Navigate to Financial Security page', async () => {
        await Navigate_To_Useful_Info(page, '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[5]/a/span');
        console.log('Navigated to Financial Security page');
    });

    // Step 2: Wait for the table to be attached to the DOM
    await allure.step('Wait for table to be attached to the DOM', async () => {
        const tableLocator = page.locator('xpath=/html/body/section[2]/div/section/div/div/div/table');
        await tableLocator.waitFor({ state: 'attached', timeout: 30000 });
        console.log('Table is attached to the DOM');
    });

    // Step 3: Ensure the table is visible
    await allure.step('Ensure the table is visible', async () => {
        const tableLocator = page.locator('xpath=/html/body/section[2]/div/section/div/div/div/table');
        await tableLocator.waitFor({ state: 'visible', timeout: 30000 });
        console.log('Table is visible on the page');
    });

    // Step 4: Wait for rows to load
    await allure.step('Wait for rows to load', async () => {
        const rows = page.locator('xpath=/html/body/section[2]/div/section/div/div/div/table/tbody/tr');
        await rows.first().waitFor({ state: 'attached', timeout: 30000 });
        const rowCount = await rows.count();
        console.log(`Table has ${rowCount} rows`);
        return rowCount;
    });

    // Step 5: Define expected data for validation
    const expectedData = [
        { HolidayType: 'Coach Holidays (UK)', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
        { HolidayType: 'Coach Holidays (Europe)', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '75 days before departure' },
        { HolidayType: 'Self-Drive Holidays', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
        { HolidayType: 'Self-Drive Experiences', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£75', BalanceDue: '56 days before departure' },
        { HolidayType: 'River Cruises', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' },
        { HolidayType: 'Sea Cruises', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' },
        { HolidayType: 'Ticketed Events', SuperLowDeposit: '£1', LowDeposit: '£25', FullDeposit: '£300', BalanceDue: '75 days before departure' }
    ];

    // Step 6: Validate rows against expected data
    await allure.step('Validate rows against expected data', async () => {
        const rows = page.locator('xpath=/html/body/section[2]/div/section/div/div/div/table/tbody/tr');
        const rowCount = await rows.count();

        if (rowCount !== expectedData.length) {
            console.warn(`Row count mismatch: expected ${expectedData.length}, got ${rowCount}`);
            allure.addAttachment('Row Count Mismatch', `Expected: ${expectedData.length}, Got: ${rowCount}`);
        }

        // Validate each row's content
        for (let i = 0; i < expectedData.length; i++) {
            const cells = rows.nth(i).locator('td');

            // Explicitly wait for each cell to be visible
            await cells.first().waitFor({ state: 'attached', timeout: 10000 });

            const holidayType = (await cells.nth(0).textContent())?.trim() || '';
            const superLowDeposit = (await cells.nth(1).textContent())?.trim() || '';
            const lowDeposit = (await cells.nth(2).textContent())?.trim() || '';
            const fullDeposit = (await cells.nth(3).textContent())?.trim() || '';
            const balanceDue = (await cells.nth(4).textContent())?.trim() || '';

            const expectedRow = expectedData[i];
            console.log(`Validating row ${i + 1}`);

            try {
                expect(holidayType).toBe(expectedRow.HolidayType);
                expect(superLowDeposit).toBe(expectedRow.SuperLowDeposit);
                expect(lowDeposit).toBe(expectedRow.LowDeposit);
                expect(fullDeposit).toBe(expectedRow.FullDeposit);
                expect(balanceDue).toBe(expectedRow.BalanceDue);
            } catch (error) {
                allure.addAttachment('Row Validation Failed', `Row ${i + 1} validation failed: ${error.message}`);
                throw error; // Fail the test if validation fails
            }
        }

        console.log('Table content verified successfully');
    });
});
