Feature: Login feature 

# always Given or And 
Background: 
	Given the browser is loaded 
	
Scenario: 
	Given login app page click on login link
	# the values for the user name and password 
	# lets take it from excel sheet  
		And enter user name and password 
	When user click on login button 
	Then check the user name exists 
		And update the user state and city 
