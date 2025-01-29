const {isVisible, getTextAndCompare, urlContains} = require('./Helper_Functions');

async function Navigate_To_River_Cruises(page) {
    await page.click('//*[@id="elasticSearchFiltersTabs"]/li[3]')
    console.log('Navigated to River Cruises section');
}

module.exports = {Navigate_To_River_Cruises};
