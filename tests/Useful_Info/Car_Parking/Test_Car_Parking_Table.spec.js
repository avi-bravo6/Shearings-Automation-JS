/* Description: This test script is created to test the Car Parking table contents
Date: 07/01/2025
Created by: Avi */

const { test, expect } = require('@playwright/test');

test('Test Car Parking Table', async ({ page }) => {
    // Step 1: Navigate to Home Page
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Home Page');

    // Step 2: Click on Useful Info button
    const usefulInfoButton = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/button';
    await page.locator(usefulInfoButton).click();
    console.log('Clicked on Useful Info button');

    // Step 3: Click on Car Parking button
    const carParkingXpath = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/div/div/div[3]/div/ul/li[2]/a/span';
    await page.locator(carParkingXpath).click();
    console.log('Clicked on Car Parking button');

    // Step 4: Verify the user is navigated to the correct page
    const urlContainsText = 'car-parking';
    await expect(page).toHaveURL(new RegExp(urlContainsText));
    console.log('Navigated to correct page');

    // Step 5: Wait for the table to be visible
    const tableLocator = page.locator('xpath=/html/body/section[3]/div/div/div/table');
    await tableLocator.waitFor({ state: 'visible', timeout: 10000 }); // Wait up to 10 seconds
    console.log('Table is visible on the page');

    // Step 6: Get all rows of the table (excluding the header row)
    const rows = tableLocator.locator('tbody tr');
    const rowCount = await rows.count();
    console.log(`Table has ${rowCount} rows`);

    // Validate table rows if they exist
    if (rowCount === 0) {
        throw new Error('Table is visible but contains no rows');
    }

    // Define the expected data for validation (update based on your table content)
    const expectedData = [
            { Hotel: 'Broadway Park Hotel', Location: 'Isle of Wight', Parking: 'Yes', Charge: '£6.00 per day' },
            { Hotel: 'Burlington Hotel', Location: 'Eastbourne', Parking: 'Yes', Charge: '£6.00 per day' },
            { Hotel: 'Caledonian Hotel', Location: 'Fort William', Parking: 'Yes', Charge: 'FREE' },
            { Hotel: 'Derwentwater Hotel', Location: 'Keswick', Parking: 'Yes', Charge: 'FREE' },
            { Hotel: 'Dilkhusa Grand Hotel', Location: 'Ilfracombe', Parking: 'Yes', Charge: 'FREE' },
            { Hotel: 'Esplanade Hotel', Location: 'Paignton', Parking: 'Yes', Charge: '£6.00 per day' },
            { Hotel: 'Grand Atlantic Hotel', Location: 'Weston-super-Mare', Parking: 'Yes', Charge: '£6.00 per day' },
            { Hotel: 'Great Western Hotel', Location: 'Oban', Parking: 'Yes', Charge: '£6.00 per day' },
            { Hotel: 'Highland Hotel', Location: 'Strathpeffer', Parking: 'Yes', Charge: 'FREE' },
            { Hotel: 'Imperial Hotel Exmouth', Location: 'Exmouth', Parking: 'Yes', Charge: '£6.00 per day' },
            { Hotel: 'Marine Hotel', Location: 'Llandudno', Parking: 'Yes', Charge: '£6.00 per day' },
            { Hotel: 'Pitlochry Hydro Hotel', Location: 'Pitlochry', Parking: 'Yes', Charge: '£6.00 per day' },
            { Hotel: 'Portpatrick Hotel', Location: 'Portpatrick', Parking: 'Yes', Charge: '£6.00 per day' },
            { Hotel: 'Ship & Castle Hotel', Location: 'St. Mawes', Parking: 'No', Charge: '---' },
            { Hotel: 'St Ives Bay Hotel', Location: 'St. Ives', Parking: 'Yes', Charge: '£6.00 per day' },
            { Hotel: 'Windermere Hotel', Location: 'Windermere', Parking: 'Yes', Charge: '£6.00 per day' }    
    ];

    // Step 7: Validate each row
    for (let i = 0; i < rowCount; i++) {
        const cells = rows.nth(i).locator('td');
        const hotel = await cells.nth(0).textContent();
        const location = await cells.nth(1).textContent();
        const parking = await cells.nth(2).textContent();
        const charge = await cells.nth(3).textContent();

        const expectedRow = expectedData[i];
        console.log(`Validating row ${i + 1}`);
        expect(hotel.trim()).toBe(expectedRow.Hotel);
        expect(location.trim()).toBe(expectedRow.Location);
        expect(parking.trim()).toBe(expectedRow.Parking);
        expect(charge.trim()).toBe(expectedRow.Charge);
    }
    console.log('Table content verified successfully');
});
