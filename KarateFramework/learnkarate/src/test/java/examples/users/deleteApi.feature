Feature:Delete user via DELETE API

Background:
  * url 'https://billpay-api.gauravkhurana-practice-api.workers.dev'
  * configure headers = {'Accept' : 'application/json','X-API-Key' : 'demo-api-key-123','X-Request-Id' : 'swagger-ig9trzj9c'}

    Scenario:Delete a user via DELETE API
    Given path '/v1/users/user-d54947c3'
    When method DELETE
    Then status 200

    Scenario:Verify the user was deleted successfully
    Given path '/v1/users/user-d54947c3'
    When method GET
    Then status 404
    And match response.error.message == "User with ID 'user-d54947c3' not found"