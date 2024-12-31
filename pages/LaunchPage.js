// pages/LaunchPage.js

class LaunchPage {
    constructor(page) {
      this.page = page;
    }
  
    // Function to launch the homepage in Chrome browser
    async launchHomePage() {
      await this.page.goto('https://www.shearings.com/');
      console.log('Page launched successfully');
    }
  }
  
  export default LaunchPage;
  