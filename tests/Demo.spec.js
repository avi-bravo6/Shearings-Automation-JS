import { test } from '@playwright/test';
import { fillInput } from '../pages/Helper_Functions';  
import { allure } from 'allure-playwright';

test('Search functionality on Google', async ({ page }) => {
  allure.description('This test validates Google search functionality.');
  allure.label('feature', 'Search');
  allure.label('severity', 'critical');
  allure.parameter('Environment', 'Production');

  await allure.step('Navigate to Google', async () => {
    await page.goto('https://google.com');
  });

  await allure.step('Perform a search', async () => {
    await fillInput(page, 'input[name="q"]', 'Playwright');
    await page.press('input[name="q"]', 'Enter');
  });

  await allure.step('Verify search results', async () => {
    const title = await page.title();
    expect(title).toContain('Playwright');
  });

  allure.attachment('Screenshot', await page.screenshot({ fullPage: true }), 'image/png');
});
