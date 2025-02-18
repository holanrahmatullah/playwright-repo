// @ts-check
const {test, expect} = require('@playwright/test')
const {default: loginActions} = require('../tests/actions/loginActions')
const {default: inventoryProductActions} = require('../tests/actions/inventoryProductActions')
const {default: checkoutActions} = require('../tests/actions/checkoutActions')

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