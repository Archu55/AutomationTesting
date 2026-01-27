import sauceLabLogin from '../pageobjects/sauceLabLogin.js';

Given(/^I am on login page$/, async () => {
  await sauceLabLogin.open();
});

When(/^I login with the (.+) and (.+)$/, async (username, password) => {
  await sauceLabLogin.login(username, password);
});
