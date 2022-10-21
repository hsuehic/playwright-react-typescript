import { test, expect } from '@playwright/test';

test('Basic Test', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React App/);

  // create a locator
  const getStarted = page.getByText('Learn React');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', 'https://reactjs.org');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*reactjs\.org/);
});
