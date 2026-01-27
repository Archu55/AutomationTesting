Feature:Create a new user via POST API

Background:
  * url 'https://billpay-api.gauravkhurana-practice-api.workers.dev'
  * configure headers = {'Accept' : 'application/json','X-API-Key' : 'demo-api-key-123','X-Request-Id' : 'swagger-ig9trzj9c'}

Scenario:Create a new user via POST API
    Given path '/v1/users'
    And request { "firstName": "Tom", "lastName": "Jerry", "email": "tom.jerry@example.com" }
    When method POST
    Then status 201
    And match response.data.firstName == 'Tom'
    And match response.data.lastName == 'Jerry'
      # Step 2: Extract user ID
    * def userId = response.data.id

      # Step 3: Verify the user was created successfully
    Given path '/v1/users/' + userId
    When method GET
    Then status 200
    And match response.data.firstName == 'Tom'
    And match response.data.lastName == 'Jerry'
    And match response.data.email == "tom.jerry@example.com"