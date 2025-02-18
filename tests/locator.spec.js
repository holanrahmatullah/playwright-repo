// @ts-check
const {test, expect} = require('@playwright/test')
const {default: loginActions} = require('../tests/actions/loginActions')
const {default: inventoryProductActions} = require('../tests/actions/inventoryProductActions')
const {default: checkoutActions} = require('../tests/actions/checkoutActions')



test('Locator and Assertation', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle("Swag Labs");

    const inputUsername = page.locator('input#user-name')
    await inputUsername.fill('standard_user')
    await expect(inputUsername).toHaveValue('standard_user')

    const inputPassword = page.locator('input#password')
    await inputPassword.fill('secret_sauce')
    await expect(inputPassword).toHaveValue('secret_sauce')

    // await page.locator('input#password').fill('secret_sauce')
    // await expect(page.locator('input#password')).toHaveValue('secret_sauce')

    const buttonLogin = page.locator('#login-button')
    await buttonLogin.click()


    await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText('Sauce Labs Backpack')
    const addtocartback = page.locator('#add-to-cart-sauce-labs-backpack');
    await addtocartback.click();
    // // await page.locator('[data-test="button#add-to-cart-sauce-labs-backpack"]').click();

    await expect(page.locator('[data-test="item-1-title-link"]')).toHaveText('Sauce Labs Bolt T-Shirt')
    const addtocartsaucelabsboltshirt = page.locator('button#add-to-cart-sauce-labs-bolt-t-shirt')
    await addtocartsaucelabsboltshirt.click()

    // await page.locator('button#add-to-cart-sauce-labs-bolt-t-shirt').click();

    await expect(page.locator('[data-test="item-0-title-link"]')).toHaveText('Sauce Labs Bike Light')
    const addtocartsaucelabsbikelight = page.locator('button#add-to-cart-sauce-labs-bike-light')
    await addtocartsaucelabsbikelight.click()

    // await page.locator('button#add-to-cart-sauce-labs-bike-light').click();

    const shopingcartall = page.locator('div#shopping_cart_container > a')
    await shopingcartall.click()

    await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText('Sauce Labs Backpack')
    await expect(page.locator('[data-test="item-1-title-link"]')).toHaveText('Sauce Labs Bolt T-Shirt')
    await expect(page.locator('[data-test="item-0-title-link"]')).toHaveText('Sauce Labs Bike Light')

    const btnremovecartsaucelabsbikeligh = page.locator('button#remove-sauce-labs-bike-light')
    await btnremovecartsaucelabsbikeligh.click()


    const buttonCheckout = page.locator('button#checkout')
    await buttonCheckout.click()
    

    const inputCheckFirstName = page.locator('input#first-name')
    await inputCheckFirstName.fill('Holan Aja')
    await expect(inputCheckFirstName).toHaveValue('Holan Aja')

    const inputCheckLasttName = page.locator('input#last-name')
    await inputCheckLasttName.fill('Di Sini')
    await expect(inputCheckLasttName).toHaveValue('Di Sini')

    const inputCheckPC = page.locator('input#postal-code')
    await inputCheckPC.fill('12345')
    await expect(inputCheckPC).toHaveValue('12345')

    const buttonCheckoutContinue = page.locator('input#continue')
    await buttonCheckoutContinue.click()
    


    await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText('Sauce Labs Backpack')
    await expect(page.locator('[data-test="item-1-title-link"]')).toHaveText('Sauce Labs Bolt T-Shirt')

    await expect(page.locator('[data-test="payment-info-label"]')).toHaveText('Payment Information:')
    await expect(page.locator('[data-test="payment-info-value"]')).toHaveText('SauceCard #31337')
    await expect(page.locator('[data-test="shipping-info-label"]')).toHaveText('Shipping Information:')
    await expect(page.locator('[data-test="shipping-info-value"]')).toHaveText('Free Pony Express Delivery!')
    await expect(page.locator('[data-test="total-info-label"]')).toHaveText('Price Total')
    await expect(page.locator('[data-test="subtotal-label"]')).toHaveText('Item total: $45.98')
    await expect(page.locator('[data-test="tax-label"]')).toHaveText('Tax: $3.68')
    await expect(page.locator('[data-test="total-label"]')).toHaveText('Total: $49.66')

    const buttonOverviewFinish = page.locator('button#finish')
    await buttonOverviewFinish.click()

    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!')
    await expect(page.locator('[data-test="complete-text"]')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    await expect(page.locator('[data-test="pony-express"]')).toBeVisible()

})

test('Locator and Assertation with Page Object Model', async ({page}) =>{
    const loginPage = new loginActions(page);
    await loginPage.goto();
    await loginPage.inputLogin();

    const inventoryPage = new inventoryProductActions(page)
    await inventoryPage.addSpecifikThreeItem()

    const checkoutPage = new checkoutActions(page)
    await checkoutPage.checkoutItem()
    await checkoutPage.checkoutInformation()
    await checkoutPage.checkoutOverview()
    await checkoutPage.checkoutComplate()



})