// This test is created to verify Home Page header elements
const {test, expect} = require('@playwright/test');
test('Verify Home Page header elements', async ({page}) => {
    const logo = '//*[@id="top"]/div[4]/a';
    const brochureRequestButton = '//*[@id="top"]/div[1]/div/ul/li[1]/a';
    const openingTimesButton = '//*[@id="top"]/div[1]/div/ul/li[2]/button';
    const myBookingButton = '//*[@id="top"]/div[1]/div/ul/li[3]/a';
    const agentLoginButton = '//*[@id="top"]/div[1]/div/ul/li[4]/a';
    const homePageButton = '//*[@id="top"]/div[6]/nav/div/ul/li[1]/a';
    const destinationsButton = '//*[@id="top"]/div[6]/nav/div/ul/li[2]/button';
    const holidaysButton = '//*[@id="top"]/div[6]/nav/div/ul/li[3]/button';
    const usefulInfoButton = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/button';
    const searchButton = '//*[@id="top"]/div[6]/nav/div/ul/li[5]/button';
    const coachHolidays = '//*[@id="elasticSearchFiltersTabs"]/li[1]/a';
    const selfDriveHolidays = '//*[@id="elasticSearchFiltersTabs"]/li[2]/a';
    const riverCruise = '//*[@id="elasticSearchFiltersTabs"]/li[2]/a';

    //step 1: Open the homepage
    await page.goto('https://www.shearings.com/');

    //step 2: Check if the logo is visible and enabled
    const visible = await page.isVisible(logo);
    console.log(`Is logo visible? ${visible}`);
    console.log(`Is logo enabled? ${await page.isEnabled(logo)}`);

    //step 3: Check if the brochure request button is visible and enabled
    const visible1 = await page.isVisible(brochureRequestButton);
    console.log(`Is Brochure Request Button visible? ${visible1}`);
    console.log(`Is Brochure Request Button enabled? ${await page.isEnabled(brochureRequestButton)}`);

    //step 4: Check if the opening times button is visible and enabled
    const visible2 = await page.isVisible(openingTimesButton);
    console.log(`Is Opening Times Button visible? ${visible2}`);
    console.log(`Is Opening Times Button enabled? ${await page.isEnabled(openingTimesButton)}`);

    //step 5: Check if the my booking button is visible and enabled
    const visible3 = await page.isVisible(myBookingButton);
    console.log(`Is My Booking Button visible? ${visible3}`);
    console.log(`Is My Booking Button enabled? ${await page.isEnabled(myBookingButton)}`);

    //step 6: Check if the agent login button is visible and enabled    
    const visible4 = await page.isVisible(agentLoginButton);    
    console.log(`Is Agent Login Button visible? ${visible4}`);
    console.log(`Is Agent Login Button enabled? ${await page.isEnabled(agentLoginButton)}`);

    //step 7: Check if the home page button is visible and enabled
    const visible5 = await page.isVisible(homePageButton);    
    console.log(`Is Home Page Button visible? ${visible5}`);
    console.log(`Is Home Page Button enabled? ${await page.isEnabled(homePageButton)}`);

    //step 8: Check if the destinations button is visible and enabled    
    const visible6 = await page.isVisible(destinationsButton);    
    console.log(`Is Destinations Button visible? ${visible6}`);
    console.log(`Is Destinations Button enabled? ${await page.isEnabled(destinationsButton)}`);

    //step 9: Check if the holidays button is visible and enabled    
    const visible7 = await page.isVisible(holidaysButton);    
    console.log(`Is Holidays Button visible? ${visible7}`);
    console.log(`Is Holidays Button enabled? ${await page.isEnabled(holidaysButton)}`);

    //step 10: Check if the useful info button is visible and enabled    
    const visible8 = await page.isVisible(usefulInfoButton);    
    console.log(`Is Useful Info Button visible? ${visible8}`);
    console.log(`Is Useful Info Button enabled? ${await page.isEnabled(usefulInfoButton)}`);

    //step 11: Check if the search button is visible and enabled    
    const visible9 = await page.isVisible(searchButton);        
    console.log(`Is Search Button visible? ${visible9}`);    
    console.log(`Is Search Button enabled? ${await page.isEnabled(searchButton)}`);

    //step 12: Check if the self drive holidays button is visible and enabled    
    const visible10 = await page.isVisible(selfDriveHolidays);        
    console.log(`Is Self Drive Holidays Button visible? ${visible10}`);    
    console.log(`Is Self Drive Holidays Button enabled? ${await page.isEnabled(selfDriveHolidays)}`);

    //step 13: Check if the river cruise button is visible and enabled    
    const visible11 = await page.isVisible(riverCruise);        
    console.log(`Is River Cruise Button visible? ${visible11}`);    
    console.log(`Is River Cruise Button enabled? ${await page.isEnabled(riverCruise)}`);

    // Base XPath for banners and the "Next" button
    const bannerBaseXPath = '//*[@id="top"]/div[2]/div/div[2]/div/div/div';
    const bannerTextXPathSuffix = '/div/div/div/div/a';
    const nextButtonXPath = '//*[@id="top"]/div[2]/div/div[1]/button[2]';

    //step 14: Check if the banner exists and contains text
    for (let i = 3; i <= 6; i++) {
        // Construct the banner XPath dynamically
        const currentBannerXPath = `${bannerBaseXPath}[${i}]${bannerTextXPathSuffix}`;
    
        // Step 1: Wait for the banner to be visible
        await page.waitForSelector(currentBannerXPath, { state: 'visible' });
    
        // Step 2: Get the banner text
        const bannerText = await page.locator(currentBannerXPath).innerText();
        console.log(`Banner ${i - 2} text: ${bannerText}`);
    
        // Step 3: Click the "Next" button (if not the last banner)
        if (i < 6) {
            await page.locator(nextButtonXPath).click();
            console.log(`Clicked on the "Next" button after Banner ${i - 2}`);
        }
    }

    // Cover
    const coverUkCoach = '/html/body/section[1]/div[4]';
    const coverEuropeanCoach = '/html/body/section[1]/div[5]';
    const oneEuro = '/html/body/section[1]/div[6]/div';

    // Function to get text and print
    async function getTextAndPrint(page, xpath) {
        const text = await page.locator(`xpath=${xpath}`).innerText();
        console.log(`Text for XPath ${xpath}: ${text}`);
    }

    // Get and print text
    await getTextAndPrint(page, coverUkCoach);
    await getTextAndPrint(page, coverEuropeanCoach);

    // Confirm if oneEuro XPath contains an image
    const hasImage = await page.locator(`xpath=${oneEuro}//img`).first().isVisible();  // Use `.first()` to select the first image
    console.log(`Does ${oneEuro} contain an image? ${hasImage}`);
});

