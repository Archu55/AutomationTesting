import { Given, When, Then } from '@wdio/cucumber-framework';
import productDetailsSauceLabPage from '../pageobjects/productDetailsSauceLabPage';
import { globalWorldData } from '../../support/globalWorldData';

Given(/^I select the (.+) from product sort container$/, async (filter) => {
  await productDetailsSauceLabPage.selectFilter(filter);
});

When(/^I add (.+) to cart$/, async function (products) {
  globalWorldData.productData.price =
    await productDetailsSauceLabPage.productDetailsPrice(products);
  await productDetailsSauceLabPage.addProduct(products);
});

Then(/^Move to cart$/, async () => {
  await productDetailsSauceLabPage.navigateToCart();
});
