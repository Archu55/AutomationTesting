import sauceLabPage from './sauceLabPage';

class cartsauceLabPage extends sauceLabPage {
  productNameInCart(products) {
    return $(`//div[@data-test="inventory-item-name"][text()='${products}']`);
  }
  get checkoutIncart() {
    return $('//button[@data-test="checkout"]');
  }

  cartProductPrice(products) {
    return $(
      `//div[@data-test="inventory-item-name"][text()='${products}']/ancestor::div[@class="cart_item_label"]//div[@data-test="inventory-item-price"]`
    );
  }
  async checkoutCartPage() {
    await this.checkoutCartPage().click();
  }
  async cartDetailsProductPrice(products) {
    const priceElement = this.cartProductPrice(products);
    await priceElement.waitForExist();
    return await priceElement.getText();
  }
}

export default new cartsauceLabPage();
