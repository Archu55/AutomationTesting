export default class sauceLabPage {
  get cart() {
    return $('//a[@class="shopping_cart_link"]');
  }

  async navigateToCart() {
    await this.cart.click();
  }
}
