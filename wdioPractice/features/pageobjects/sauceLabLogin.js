class sauceLabLogin {
  get inputUsername() {
    return $("//input[@id='user-name']");
  }

  get inputPassword() {
    return $("//input[@id='password']");
  }

  get btnlogin() {
    return $("//input[@id='login-button']");
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnlogin.click();
  }

  open() {
    return browser.url(`https://www.saucedemo.com`);
  }
}
export default new sauceLabLogin();
