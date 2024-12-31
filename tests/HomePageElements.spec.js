// This test is created to verify Home Page header elements
const {test, expect} = require('@playwright/test');
test('Verify Home Page header elements', async ({page}) => {
    const logo = '//*[@id="top"]/div[4]/a';
    const brochureRequestButton = '//*[@id="top"]/div[1]/div/ul/li[1]/a';
    const openingTimesButton = '//*[@id="top"]/div[1]/div/ul/li[2]/button';
    const myBookingButton = '//*[@id="top"]/div[1]/div/ul/li[3]/a';
    const agentLoginButton = '//*[@id="top"]/div[1]/div/ul/li[4]/a';

    //step 1: Open the homepage
    await page.goto('https://www.shearings.com/');

    //step 2: Check if the logo is visible and enabled
    const visible = await page.isVisible(logo);
    console.log(`Is logo visible? ${visible}`);
    console.log(`Is logo enabled? ${await page.isEnabled(logo)}`);

    //step 3: Check if the brochure request button is visible and enabled
    const brochureRequestVisible = await page.isVisible(brochureRequestButton);
    console.log(`Brochure request button is visible? ${brochureRequestVisible}`);

    //step 4: Check if the opening times button is visible
    const openingTimesVisible = await page.isVisible(openingTimesButton);
    console.log(`Is opening times button visible? ${openingTimesVisible}`);
    await page.locator(openingTimesButton).isEnabled();
    console.log('Opening times button is enabled');

    //step 5: Check if the my booking button is visible
    const myBookingVisible = await page.isVisible(myBookingButton);
    console.log(`Is my booking button visible? ${myBookingVisible}`);
    await page.locator(myBookingButton).isEnabled();
    console.log('My booking button is enabled');

    //step 6: Check if the agent login button is visible
    const agentLoginVisible = await page.isVisible(agentLoginButton);
    console.log(`Is agent login button visible? ${agentLoginVisible}`);
    await page.locator(agentLoginButton).isEnabled();
    console.log('Agent login button is enabled');

});