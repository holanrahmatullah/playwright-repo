import { expect } from "@playwright/test";

import checkoutLocator from "../locator/checkoutLocator";

export default class inventoryProductAction {

    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page
        this.checkoutLocator = new checkoutLocator();

        this.titleitemOne = page.locator(this.checkoutLocator.titleitemOne)
        this.additemOne = page.locator(this.checkoutLocator.additemOne)
        this.titleitemTwo = page.locator(this.checkoutLocator.titleitemTwo)
        this.additemTwo = page.locator(this.checkoutLocator.additemTwo)
        this.titleitemThree = page.locator(this.checkoutLocator.titleitemThree)
        this.additemThree = page.locator(this.checkoutLocator.additemThree)

        this.shopingcartall = page.locator(this.checkoutLocator.shopingcartall)
        this.btnremovecartsaucelabsbikeligh = page.locator(this.checkoutLocator.btnremovecartsaucelabsbikeligh)
        this.buttonCheckout = page.locator(this.checkoutLocator.buttonCheckout)


        this.inputCheckFirstName = page.locator(this.checkoutLocator.inputCheckFirstName)
        this.inputCheckLasttName = page.locator(this.checkoutLocator.inputCheckLasttName)
        this.inputCheckPC = page.locator(this.checkoutLocator.inputCheckPC)
        this.buttonCheckoutContinue = page.locator(this.checkoutLocator.buttonCheckoutContinue)

        this.paymentInformationLabel = page.locator(this.checkoutLocator.paymentInformationLabel)
        this.paymentInfoValue = page.locator(this.checkoutLocator.paymentInfoValue)
        this.shippingInfoLabel = page.locator(this.checkoutLocator.shippingInfoLabel)
        this.shippingInfoValue = page.locator(this.checkoutLocator.shippingInfoValue)
        this.totalInfoLabel = page.locator(this.checkoutLocator.totalInfoLabel)
        this.subtotalLabel = page.locator(this.checkoutLocator.subtotalLabel)
        this.taxLabel = page.locator(this.checkoutLocator.taxLabel)
        this.totalLabel = page.locator(this.checkoutLocator.totalLabel)
        this.buttonFinishCheckoutOverview = page.locator(this.checkoutLocator.buttonFinishCheckoutOverview)
        this.completeHeader = page.locator(this.checkoutLocator.completeHeader)
        this.completeText = page.locator(this.checkoutLocator.completeText)
        this.ponyExpress = page.locator(this.checkoutLocator.ponyExpress)

    }


    async checkoutItem() {
        await this.shopingcartall.click()
        await expect(this.titleitemOne).toHaveText('Sauce Labs Backpack')
        await expect(this.titleitemTwo).toHaveText('Sauce Labs Bolt T-Shirt')
        await expect(this.titleitemThree).toHaveText('Sauce Labs Bike Light')

        await this.btnremovecartsaucelabsbikeligh.click()

        await this.buttonCheckout.click()

    }

    async checkoutInformation() {
        await this.inputCheckFirstName.fill('Holan Aja')
        await expect(this.inputCheckFirstName).toHaveValue('Holan Aja')
        
        await this.inputCheckLasttName.fill('Di Sini')
        await expect(this.inputCheckLasttName).toHaveValue('Di Sini')

        await this.inputCheckPC.fill('12345')
        await expect(this.inputCheckPC).toHaveValue('12345')
        
        await this.buttonCheckoutContinue.click()

    }

    async checkoutOverview(){

        await expect(this.titleitemOne).toHaveText('Sauce Labs Backpack')
        await expect(this.titleitemTwo).toHaveText('Sauce Labs Bolt T-Shirt')

        await expect(this.paymentInformationLabel).toHaveText('Payment Information:')
        await expect(this.paymentInfoValue).toHaveText('SauceCard #31337')
        await expect(this.shippingInfoLabel).toHaveText('Shipping Information:')
        await expect(this.shippingInfoValue).toHaveText('Free Pony Express Delivery!')
        await expect(this.totalInfoLabel).toHaveText('Price Total')
        await expect(this.subtotalLabel).toHaveText('Item total: $45.98')
        await expect(this.taxLabel).toHaveText('Tax: $3.68')
        await expect(this.totalLabel).toHaveText('Total: $49.66')

        await this.buttonFinishCheckoutOverview.click()
    }

    async checkoutComplate(){
        await expect(this.completeHeader).toHaveText('Thank you for your order!')
        await expect(this.completeText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        await expect(this.ponyExpress).toBeVisible()


    }




}