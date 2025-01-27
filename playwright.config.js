// const config = {
//   reporter: [['html', { outputFolder: 'playwright-report' }]]
// };
// module.exports = config;

export default defineConfig({
  // ...
  reporter: [['list'], ['allure-playwright']],
});