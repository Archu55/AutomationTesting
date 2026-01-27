Feature: Product details page

Scenario Outline: Product details page
Given I am on login page
When I login with the <username> and <password>
And I select the <filter> from product sort container
And I add <products> to cart
Then Move to cart 


Examples:
|username     |password|filter|products|
#|standard_user|secret_sauce|Name (A to Z)|Sauce Labs Backpack|
|standard_user|secret_sauce|Price (low to high)|Sauce Labs Bolt T-Shirt|

