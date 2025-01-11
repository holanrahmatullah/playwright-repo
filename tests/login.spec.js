// @ts-check
const { test, expect } = require('@playwright/test');

test('Login Page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle("Swag Labs");
  await page.getByRole('textbox', { name: 'Username'}).fill('standard_user')
  await page.getByRole('textbox', { name: 'Password'}).fill('secret_sauce')
  await page.getByRole('button', { name: 'Login'}).click()
  await expect(page.getByText('Swag Labs')).toBeVisible()
  await expect(page).toHaveTitle("Swag Labs");

});


/// for codegen code
test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByText('Swag Labs').click();
  });