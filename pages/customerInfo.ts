import { Page } from "@playwright/test";

export class CustomerInfo {
    constructor(public page: Page) {}

    listOfItems = "[data-test='inventory-item']";
    checkout = "#checkout";
    firstName = "First Name";               //for placholder locators
    lastName = "Last Name";
    zipcode = "Zip/Postal Code";
    continue = "#continue";

    async clickCheckout() {
        await this.page.locator(this.checkout).click();
    }

    async fillCustomerInfo(firstName: string, lastName: string, zipcode: string) {
        await this.page.getByPlaceholder(this.firstName).fill(firstName);
        await this.page.getByPlaceholder(this.lastName).fill(lastName);
        await this.page.getByPlaceholder(this.zipcode).fill(zipcode);
    }

    async clickContinue() {
        await this.page.locator(this.continue).click();
    }

}