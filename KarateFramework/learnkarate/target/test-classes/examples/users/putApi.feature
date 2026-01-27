Feature: Test PUT API for updating user information
Background:
  * url 'https://billpay-api.gauravkhurana-practice-api.workers.dev'
  * configure headers = {'Accept' : 'application/json','X-API-Key' : 'demo-api-key-123','X-Request-Id' : 'swagger-xyz12345'}        

  Scenario: Update user details with a full object
    Given path '/v1/users/user-583e69e4'
    And request { "firstName": "Micheal", "lastName": "tom", "email": "micheal.tom@example.com" }
    When method PUT
    Then status 200
    And match response.data.firstName == 'Micheal'
    And match response.data.lastName == 'tom'
    And match response.data.email == 'micheal.tom@example.com'
    
    Scenario:Verify the user was updated successfully
    Given path '/v1/users/user-583e69e4'
    When method GET
    Then status 200
    And match response.data.firstName == 'Micheal'
    And match response.data.lastName == 'tom'
    And match response.data.email == "micheal.tom@example.com"





    
        