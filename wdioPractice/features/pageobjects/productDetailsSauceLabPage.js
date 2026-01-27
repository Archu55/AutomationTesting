import sauceLabPage from './sauceLabPage';

class productDetailsSauceLabPage extends sauceLabPage {
  get inputFilter() {
    return $("//select[@class='product_sort_container']");
  }

  addToCartButton(products) {
    return $(
      `//div[@data-test='inventory-item-name'][text()='${products}']/ancestor::div[@data-test='inventory-item']//button[text()='Add to cart']`
    );
  }

  productPrice(products) {
    return $(
      `//div[@data-test='inventory-item-name'][text()='${products}']/ancestor::div[@data-test='inventory-item-description']//div[@data-test='inventory-item-price']`
    );
  }

  async selectFilter(filter) {
    await this.inputFilter.selectByVisibleText(filter);
  }

  async addProduct(products) {
    await this.addToCartButton(products).click();
  }

  async productDetailsPrice(products) {
    return await this.productPrice(products).getText();
  }
}
export default new productDetailsSauceLabPage();
