# This is my Comment 
@Sanity 
Feature: To give discount for privilleged customers 

Scenario: To give discount for platinum customers 
	Given the customer has service for 5 years 
	When has the plan "never" changed 
	Then give an additional discount of 10 percent 
	And promote for further offers 
	
Scenario: To give discount for platinum customers 
	Given the customer has service for 5 years 
	When has the plan "occationall" changed 
	Then give an additional discount of 7 percent 
	And promote for further offers 
	

Scenario: To give discount for platinum customers 
	Given the customer has service for 5 years 
	When has the plan "sometimes" changed 
	Then give an additional discount of 4 percent 
	And promote for further offers 
	
	
	
	#And, But 