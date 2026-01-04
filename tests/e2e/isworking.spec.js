import { test, expect } from '@playwright/test';

test('Is page working', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await page.screenshot({
    path: 'screenshots/isworking.png',
    fullPage: true
  });
  // Check if the word "Year" exists anywhere on the page
  await expect(page.locator('text=Stop')).toBeVisible();

  // Take screenshot
  await page.screenshot({
    path: 'screenshots/isworking.png',
    fullPage: true
  });
})
