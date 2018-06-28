#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template
@CreditCard
Feature: To issue the credit card 

Scenario Outline: To process credit card for working people 
Given the customer works 
	And in the "<officetype>" office 
When the salary is more than "<salaryrange>"
	And and "<timings>" time employement 
	And the credit score is more than "<creditscore>"
Then do the physical background check 
	And issue the card 
	
	
	Examples:
  | officetype		|		salaryrange		| 	timings		| 		creditscore		| 
  | govt					| 	20000					| 	full 			| 		700						| 
  | private				| 	40000					| 	part 			| 		650						| 
  | private 			| 	2000					| 	full 			| 		350						| 
  | semigovt			| 	6000					| 	consultant| 		500						| 
  
  
  
  
  
  
  