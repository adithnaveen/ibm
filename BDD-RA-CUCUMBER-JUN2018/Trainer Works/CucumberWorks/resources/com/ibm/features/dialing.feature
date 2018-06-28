# this is my comment 

Feature: for testing the dialing of a national number for group and individuals

Scenario: user tries to call but fails for individual
	Given the user has the dialing phone number 
	Given user resides in india 
	When dials the number 
	Then get a busy tone 
	And does not connect for individual 

Scenario: user tries to call but fails for individual 
	Given the user has the dialing phone number 
	When dials the number 
	Then get a broken tone 
	And does not connect for individual 