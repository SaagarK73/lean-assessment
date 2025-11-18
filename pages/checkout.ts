import { Page } from "@playwright/test";

export class Checkout {
    constructor(public page:Page) {}

    items = ".cart_item";
    total = ".summary_total_label";
    finish = "#finish";
    thankyouHeader = ".complete-header"

    async getTotal() {
        return this.page.locator(this.total).innerText();
    }

    async clickFinish() {
        await this.page.locator(this.finish).click();
    }

    async getThankyouHeader() {
        return this.page.locator(this.thankyouHeader).innerText();
    }

}