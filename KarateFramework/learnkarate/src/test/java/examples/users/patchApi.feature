Feature: Test PUT API for updating user information
Background:
  * url 'https://billpay-api.gauravkhurana-practice-api.workers.dev'
  * configure headers = {'Accept' : 'application/json','X-API-Key' : 'demo-api-key-123','X-Request-Id' : 'swagger-xyz12345'}        
Scenario: Update user details with partial object using PATCH
    Given path '/v1/users/user-583e69e4'
    And request { "lastName": "Smith" }
    When method PATCH
    Then status 200
    And match response.data.lastName == 'Smith'


    Scenario:Verify the user was updated successfully with PATCH
    Given path '/v1/users/user-583e69e4'
    When method GET
    Then status 200
    And match response.data.firstName == 'Micheal'
    And match response.data.lastName == 'Smith'
    And match response.data.email == "micheal.tom@example.com"
