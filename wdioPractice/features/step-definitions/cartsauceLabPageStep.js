import cartsauceLabPage from '../pageobjects/cartsauceLabPage';
import { globalWorldData } from '../../support/globalWorldData';

Then(/^I verify the (.+) name should be same on the cart page$/, async function (products) {
  // const cartPriceElement = await cartsauceLabPage.cartDetailsProductPrice(products);
  expect(await cartsauceLabPage.cartDetailsProductPrice(products)).toEqual(
    globalWorldData.productData.price
  );
});
