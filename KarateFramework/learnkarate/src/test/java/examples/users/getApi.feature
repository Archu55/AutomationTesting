Feature: Sample karate test

Background:
  * url 'https://billpay-api.gauravkhurana-practice-api.workers.dev'
  * header Accept = 'application/json'
  * header X-API-Key = 'demo-api-key-123'
  * header X-Request-Id = 'swagger-6qsdawl2i'
Scenario: Get first 10 users details
Given path '/v1/users'
And params {page:1,limit:10}
When method GET
Then status 200
