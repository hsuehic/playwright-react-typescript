import {test, expect } from '@bgotink/playwright-coverage';

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test('Basic Test', async ({ page }) => {

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React App/);

  // create a locator
  const getStarted = page.getByText('Learn React');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', 'https://reactjs.org');
 
  await page.waitForSelector("text=#1abc9c")
 
});

test('use Turquoise as a default background color', async ({ page }) => {
  await page.click("text=Turquoise")
  await page.waitForSelector("text=#1abc9c")
});

test('use Red as a background color', async ({ page }) => {
  await page.click("text=Red")
  await page.waitForSelector("text=#e74c3c")
});

test('use Yellow as a default background color', async ({ page }) => {
  await page.click("text=Yellow")
  await page.waitForSelector("text=#f1c40f")
});