const { visibleAndClick, isVisible, getTextAndCompare,fillInput } = require("./Helper_Functions");

async function Select_Departing_From(page) {
    await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span'); // Click Departing From
    await visibleAndClick(page, '//*[@id="accordion1_1737957887037"]/button'); // Expand selection
    await visibleAndClick(page, '//*[@id="ModalDeparturePoint"]/div/div/div[3]/div[2]/div/div/div[2]/div/div[1]/div'); // Select location
    await visibleAndClick(page, '//*[@id="ModalDeparturePoint"]/div/div/div[4]/div/div[2]/button'); // Save selection
    await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span', 'Bristol');
    console.log('✅ Departing From option selected');
}

async function Select_Departing_Month(page) {
    await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[2]/span[1]'); // Click Departing Month
    await getTextAndCompare(page, '//*[@id="ModalDepartureDate"]/div/div/div[1]/h5', 'Departure Date'); // Verify pop-up
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[4]/div/div[1]/button'); // Clear
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[3]/div[2]/div/div/label/select'); // Open dropdown
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[3]/div[2]/div/div/label/select/option[22]'); // Select Dec 2026
    await visibleAndClick(page, '//*[@id="ModalDepartureDate"]/div/div/div[4]/div/div[2]/button'); // Save
    await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[2]/span[1]/span', 'December 2026');
}

async function Select_Passengers(page) {
    await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[3]/span[1]'); // Click Passengers
    await getTextAndCompare(page, '//*[@id="ModalPassengers"]/div/div/div[1]/h5', 'Passengers'); // Verify pop-up
    await visibleAndClick(page, '//*[@id="ModalPassengers"]/div/div/div[4]/div/div[1]/button'); // Clear
    await visibleAndClick(page, '//*[@id="ModalPassengers"]/div/div/div[2]/div[2]/div/div[1]/div/div/div/button[1]'); // Reduce passenger count
    await visibleAndClick(page, '//*[@id="ModalPassengers"]/div/div/div[4]/div/div[2]/button'); // Save
    await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[3]/span[1]/span', '1 Adult');
    console.log('✅ Passengers selected');
}

async function Click_On_Search_Button(page) {
    await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[4]/input'); // Click Search
    console.log('✅ Search button clicked');
    page.setDefaultTimeout(10000);
}

async function Verify_Search_Results(page) {
    await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[6]', 'Whoop! \nHere are \n4 \nCoach Holidays from');
    console.log('✅ Search results page verified');

    for (let i = 1; i <= 4; i++) {
        const holidayCardXPath = `//*[@id="tour-search-results"]/div/section/div[8]/div/div[${i}]`;
        await isVisible(page, holidayCardXPath);
        console.log(`✅ Holiday card ${i} verified`);
    }
}

async function Select_Departing_From_Userinput(page) {
    await page.waitForSelector('//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span'); // Ensure the Departing From button is visible
    await visibleAndClick(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span'); // Click on Departing From option
    await visibleAndClick(page, '//*[@id="ModalDeparturePoint"]/div/div/div[4]/div/div[1]/button');  // Clear button
    await fillInput(page, '//*[@id="ModalDeparturePoint"]/div/div/div[1]/label/div', 'London Victoria'); // Enter departure point
    await visibleAndClick(page, '//*[@id="awesomplete_list_7_item_0"]');  // Select London Victoria from suggestion
    await visibleAndClick(page, '//*[@id="ModalDeparturePoint"]/div/div/div[4]/div/div[2]/button');  // Save button
    await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[7]/div/div/div/div/div/section/div[2]/div/label[1]/span[1]/span', 'London Victoria');
    console.log('✅ Value entered in Departing From field');
}

async function Verify_RiverCruise_Search_Results(page) {
    await getTextAndCompare(page, '//*[@id="tour-search-results"]/div/section/div[6]', 'Whoop! \nHere are \n4 \nRiver Cruise Holidays from');
    console.log('✅ Search results page verified');

    for (let i = 1; i <= 4; i++) {
        const holidayCardXPath = `//*[@id="tour-search-results"]/div/section/div[8]/div/div[${i}]`;
        await isVisible(page, holidayCardXPath);
        console.log(`✅ Holiday card ${i} verified`);
    }
}

module.exports = { 
    Select_Departing_From, 
    Select_Departing_Month, 
    Select_Passengers, 
    Click_On_Search_Button, 
    Verify_Search_Results,
    Select_Departing_From_Userinput,
    Verify_RiverCruise_Search_Results
};
