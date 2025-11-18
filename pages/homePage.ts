import { Page } from "@playwright/test";

export class HomePage {
    constructor(public page: Page) {}

    appLogo = ".app_logo";                                                  // using class locator
    shoppingCartBadge = ".shopping_cart_badge";
    addBackpack = "[data-test='add-to-cart-sauce-labs-backpack']";          // using css locator
    addBikeLight = "[data-test='add-to-cart-sauce-labs-bike-light']";
    addTshirt = "[data-test='add-to-cart-sauce-labs-bolt-t-shirt']";

    async addItemstoCart() {
        await this.page.locator(this.addBackpack).click();
        await this.page.locator(this.addBikeLight).click();
        await this.page.locator(this.addTshirt).click();
    }

    async clickonCart() {
        await this.page.locator(this.shoppingCartBadge).click();
    }
}