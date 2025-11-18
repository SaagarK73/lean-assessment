import { Page } from "@playwright/test";
import { Login } from "../pages/login"
import { HomePage } from "./homePage"
import { CustomerInfo } from "./customerInfo";
import { Checkout } from "./checkout";

export class PageObjects {
    login: Login;
    homePage: HomePage;
    customerInfo: CustomerInfo
    checkout: Checkout

    constructor( public page: Page) {
        this.login = new Login(page);
        this.homePage = new HomePage(page);
        this.customerInfo = new CustomerInfo(page);
        this.checkout = new Checkout(page);
    }
}