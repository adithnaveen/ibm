Feature: To test the login page on probits

   # This test is to test with valid credentials 

Scenario: Send valid user name and password 
   Given the username and password
   When clicked on login
   Then Take me to login page 