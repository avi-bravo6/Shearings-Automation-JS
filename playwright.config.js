import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['allure-playwright']],  // Ensure the allure-playwright reporter is set up here
});
