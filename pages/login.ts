import { Page } from "@playwright/test";

export class Login {
    constructor(public page: Page) {
        this.page = page;
    }

    username = "#user-name";        //using id locator
    password = "#password";
    login = "#login-button";

    async fillUsername(username: string) {
        await this.page.locator(this.username).fill(username);
    }
    
    async fillPassword(password: string) {
        await this.page.locator(this.password).fill(password)
    }

    async clickLogin() {
        await this.page.locator(this.login).click();
    }
}