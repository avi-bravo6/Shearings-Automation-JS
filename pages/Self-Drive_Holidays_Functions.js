const { visibleAndClick, isVisible, getTextAndCompare } = require("./Helper_Functions");

async function Navigate_To_Self_Drive_Holidays(page) {
    await visibleAndClick(page, '//*[@id="elasticSearchFiltersTabs"]/li[2]');
}

async function Select_Arrival_Month(page) {
    await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[2]', 'Arrival Month'); //Verify label
    await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[3]'); //Click on drop-down
    await getTextAndCompare(page, '//*[@id="ModalDepartureDate"]/div/div/div[1]/h5', 'Departure Date'); //Verify pop-up title
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[4]/div/div[1]/button'); //Clear button
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[3]/div[2]/div/div/label/span[2]'); //Month selection dropdown
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[3]/div[2]/div/div/label/select/option[20]'); //Select October 2026
    await getTextAndCompare(page, '//*[@id="ModalDepartureDate"]/div/div/div[3]/div[2]/div/div/label/select', 'October 2026'); //Verify selected month
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[4]/div/div[2]/button'); //Save button
    await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span', 'October 2026'); //Verify selected month
    console.log('Arrival month selected successfully');
}

async function Select_Guests(page) {
    await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[2]/span[2]', 'Guests'); //Verify label
    await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[2]/span[3]'); //Click on drop-down
    await visibleAndClick(page, '//*[@id="ModalPassengers"]/div/div/div[4]/div/div[1]/button'); //Clear button
    await visibleAndClick(page, '//*[@id="ModalPassengers"]/div/div/div[2]/div[2]/div/div[1]/div/div/div/button[1]'); //Minus button (decrease guest count)
    await visibleAndClick(page, '//*[@id="ModalPassengers"]/div/div/div[4]/div/div[2]/button'); //Save button
    await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[2]/span[1]/span', '1 Adult'); //Verify selected guest
    console.log('Guests selected successfully');
}

async function Click_On_Search_Button(page) {
    await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[3]/input'); //Search button
    console.log('Search button clicked');
    page.setDefaultTimeout(5000);
}

// Function to verify the search result header
async function Verify_Search_Result_Header(page) {
    const expectedText = 'Whoop! \n Here are\n 2 \n  Self-Drive Holidays from \n £308 \n pp'; 
    const isHeaderCorrect = await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[6]/p', expectedText); 
    
    if (isHeaderCorrect) {
        console.log('Search result header verified successfully');
    } else {
        console.log('Search result header did not match expected text.');
    }
}


async function Verify_Search_Results(page) {
    for (let i = 1; i <= 2; i++) {
        const holidayCardXPath = `//*[@id="tour-search-results"]/div/section/div[8]/div/div[${i}]`;
        await isVisible(page, holidayCardXPath);
        console.log(`Holiday card ${i} verified`);
    }
    console.log('Search result verified successfully');
}

module.exports = {
    Navigate_To_Self_Drive_Holidays,
    Select_Arrival_Month,
    Select_Guests,
    Click_On_Search_Button,
    Verify_Search_Result_Header,
    Verify_Search_Results
};
