
# (Data Tables)
# feature for login 

@Sanity
@Dev
@Test

Feature: to validate the users on laptop and desktop 


# if you have multiple scenarios in the feature then the backgroud will be applied for 
# all the scenarios, similar to @Before in jUnit 
Background: 
	Given the browser is open
	
Scenario: validate the user credentials 
		And the username and password is entered
		| username 		| password			| roles 		| 
		| srikanth 		|  testing 			| developer | 
		| simi 	   		|   hello 			| tester 		| 
		| karthik  		| secrettesting | qa 				|
		| srinivas 		|   bengaluru111| finance		| 
	When credentials are validated 
	Then take user to home page 


Scenario: validate the user credentials 
	And the username and password is entered in mobile 
	When credentials are validated 
	Then take user to index page 

