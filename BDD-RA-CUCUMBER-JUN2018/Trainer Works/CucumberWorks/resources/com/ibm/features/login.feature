
# (Data Tables)
# feature for login 

Feature: to validate the users on laptop and desktop 

Scenario: validate the user credentials 

	Given the browser is open 
		And the username and password is entered
		| username 		| password			| roles 		| 
		| srikanth 		|  testing 			| developer | 
		| simi 	   		|   hello 			| tester 		| 
		| karthik  		| secrettesting | qa 				|
		| srinivas 		|   bengaluru111| finance		| 
	When credentials are validated 
	Then take user to home page 

