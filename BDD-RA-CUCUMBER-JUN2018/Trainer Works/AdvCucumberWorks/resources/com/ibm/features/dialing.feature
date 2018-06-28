# this is my comment 

@Smoke 

Feature: for testing the dialing of a national number for group and individuals

@Test
Scenario Outline: user tries to call but fails
	Given the user has the dialing "<type>" number 
	Given user resides in "<country>" 
	When dials the number 
	Then get a "<tonetype>" tone 
	And does not connect for "<usertype>" 
	

Examples: 
	|		type			|		country			|		tonetype			|		usertype		|
	|		mobile		|		india				|		busy					|		individual	|
	|		landline	|		india				| 	broken				| 	individual	| 
	|		mobile		|		france			|		busy					|		group				| 
	|  	mobile		|		japan				|		ring					|		individual	|

	
