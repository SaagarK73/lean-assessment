import { test, expect } from "../pages/custom-fixture";

test.describe('Testing checkout functionality', () => {
  test('Add 3 Items to cart and checkout', async ({ pages }) => {

    // Logging in the application - can be moved to before test for multiple tests
    await pages.page.goto("https://www.saucedemo.com/");

    // username and passwords can be added as env variables by using dotenv
    await pages.login.fillUsername("standard_user");
    await pages.login.fillPassword("secret_sauce");
    await pages.login.clickLogin();

    // asserting if user is logged in
    await expect(pages.page.locator(pages.homePage.appLogo)).toBeAttached()

    // adding 3 items to cart
    await pages.homePage.addItemstoCart();

    // asserting 3 is shown on the cart icon
    await expect(pages.page.locator(pages.homePage.shoppingCartBadge)).toHaveText('3');

    // asserting 3 items are added to cart
    await pages.homePage.clickonCart();
    await expect(pages.page.locator(pages.customerInfo.listOfItems)).toHaveCount(3);

    // checking out
    await pages.customerInfo.clickCheckout();

    await pages.customerInfo.fillCustomerInfo('test name', 'test lastname', '12345');
    await pages.customerInfo.clickContinue();

    // asseting total price and number of items in cart
    await expect(pages.page.locator(pages.checkout.items)).toHaveCount(3);
    expect(await pages.checkout.getTotal()).toBe('Total: $60.45');

    // confirming order
    await pages.checkout.clickFinish();
    expect(await pages.checkout.getThankyouHeader()).toBe('Thank you for your order!');
    
  })
})