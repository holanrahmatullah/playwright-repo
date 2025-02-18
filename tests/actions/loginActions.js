import { expect } from "@playwright/test";
import loginLocator from "../locator/loginLocator";

export default class loginAction {

    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page
        this.loginLocator = new loginLocator();
        this.inputUsername = page.locator(this.loginLocator.inputUsername)
        this.inputPassword = page.locator(this.loginLocator.inputPassword)
        this.clickButtonLogin = page.locator(this.loginLocator.clickButtonLogin)
        this.titleitemOne = page.locator(this.loginLocator.titleitemOne)
        this.additemOne = page.locator(this.loginLocator.additemOne)
        this.titleitemTwo = page.locator(this.loginLocator.titleitemTwo)
        this.additemTwo = page.locator(this.loginLocator.additemTwo)
        this.titleitemThree = page.locator(this.loginLocator.titleitemThree)
        this.additemThree = page.locator(this.loginLocator.additemThree)
        this.shopingcartall = page.locator(this.loginLocator.shopingcartall)
        this.btnremovecartsaucelabsbikeligh = page.locator(this.btnremovecartsaucelabsbikeligh)
        this.buttonCheckout = page.locator(this.buttonCheckout)
        
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async inputLogin() {
        await this.inputUsername.fill('standard_user')
        await expect(this.inputUsername).toHaveValue('standard_user')

        await this.inputPassword.fill('secret_sauce')
        await expect(this.inputPassword).toHaveValue('secret_sauce')

        await this.clickButtonLogin.click()

        await expect(this.titleitemOne).toHaveText('Sauce Labs Backpack')
  
    }

    
    async checkoutItem() {
        await expect(this.titleitemOne).toHaveText('Sauce Labs Backpack')
        await expect(this.titleitemTwo).toHaveText('Sauce Labs Bolt T-Shirt')
        await expect(this.titleitemThree).toHaveText('Sauce Labs Bike Light')
        
        await this.btnremovecartsaucelabsbikeligh.click()

        await this.buttonCheckout.click()
  
    }

    async checkoutInformation(){

    }

    

}