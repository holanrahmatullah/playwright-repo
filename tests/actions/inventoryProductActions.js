import { expect } from "@playwright/test";

import invProLocator from "../locator/inventoryProductLocator";

export default class inventoryProductAction {

    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page
        this.invProLocator = new invProLocator();
        this.titleitemOne = page.locator(this.invProLocator.titleitemOne)
        this.additemOne = page.locator(this.invProLocator.additemOne)
        this.titleitemTwo = page.locator(this.invProLocator.titleitemTwo)
        this.additemTwo = page.locator(this.invProLocator.additemTwo)
        this.titleitemThree = page.locator(this.invProLocator.titleitemThree)
        this.additemThree = page.locator(this.invProLocator.additemThree)
        
    }

    async addSpecifikThreeItem() {
        await expect(this.titleitemOne).toHaveText('Sauce Labs Backpack')
        await this.additemOne.click()

        await expect(this.titleitemTwo).toHaveText('Sauce Labs Bolt T-Shirt')
        await this.additemTwo.click()

        await expect(this.titleitemThree).toHaveText('Sauce Labs Bike Light')
        await this.additemThree.click()
  
    }

    

}