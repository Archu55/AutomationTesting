Feature: Sauce lab Login page

Scenario Outline: Sauce lab Login page

Given I am on login page
When I login with the <username> and <password>

Examples:
|username     |password|
|standard_user|secret_sauce|