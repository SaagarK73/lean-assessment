import { test, expect } from "../pages/custom-fixture";

test.describe('Testing checkout functionality', () => {
  test('Add 3 Items to cart and checkout', async ({ pages }) => {
    await pages.page.goto("https://www.saucedemo.com/");

    await pages.login.fillUsername("standard_user");
    await pages.login.fillPassword("secret_sauce");

    await pages.login.clickLogin();
    await expect(pages.page.locator(pages.homePage.appLogo)).toBeAttached()

    await pages.homePage.addItemstoCart();

    await expect(pages.page.locator(pages.homePage.shoppingCartBadge)).toHaveText('3');

    await pages.homePage.clickonCart();

    await expect(pages.page.locator(pages.customerInfo.listOfItems)).toHaveCount(3);

    await pages.customerInfo.clickCheckout();

    await pages.customerInfo.fillCustomerInfo('test name', 'test lastname', '12345');
    await pages.customerInfo.clickContinue();

    await expect(pages.page.locator(pages.checkout.items)).toHaveCount(3);
    expect(await pages.checkout.getTotal()).toBe('Total: $60.45');

    await pages.checkout.clickFinish();
    expect(await pages.checkout.getThankyouHeader()).toBe('Thank you for your order!');
    
  })
})