Feature: Verify the products in the cart

    Scenario Outline: Verify the products in the carts
        Given I am on login page
        When I login with the <username> and <password>
        And I select the <filter> from product sort container
        And I add <products> to cart
        Then Move to cart
        Then I verify the <products> name should be same on the cart page

        Examples:
            | username      | password     | filter              | products            |
            | standard_user | secret_sauce | Price (low to high) | Sauce Labs Backpack |
#|standard_user|secret_sauce|Price (low to high)|Sauce Labs Bolt T-Shirt|

