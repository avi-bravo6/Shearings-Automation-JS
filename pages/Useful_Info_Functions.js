//Function to navigate to any page of UsefulInfo section

async function Navigate_To_Useful_Info(page, xpath) {

    // Naviagte to Home page
    await page.goto('https://www.shearings.com');
    console.log('Navigated to Home Page');

    //Click on Useful_Info button
    const usefulInfoButton = '//*[@id="top"]/div[6]/nav/div/ul/li[4]/button';
    await page.locator(usefulInfoButton).click();
    console.log('Clicked on Useful Info button');
    
    //Click on the given xpath
    await page.click(xpath);
    console.log('Clicked on given xpath');
}

export default { Navigate_To_Useful_Info };