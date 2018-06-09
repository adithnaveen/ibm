package com.ibm.discount.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PlatinumPlanTest {

	@Given("the customer has service for \"(\\d+)\" years")
	public void the_customer_has_service_for_5_years(int years){
		System.out.println("the customer has service for  "+years +" years>>>>>>>>>");
	}
	
	@When("^has the plan \"([a-zA-Z]{1,})\" changed$")
	public void has_the_plan_never_changed(String frequent){
		System.out.println("has the plan "+frequent+" changed>>>>> ");
	}
	
	// ? - 0 or 1 
	// * - 0 or more 
	// + - 1 or more 
	// ([0-9]+) - take number 1 or more occurance 
	// ([0-9])
	@Then("give an additional discount of \"([^\"]*)\" percent")
	public void give_an_additional_discount_of_percent(int frequency){
		System.out.println("give an additional discount of "+frequency+" percent>>>>");
	}

	@And("promote for further offers")
	public void promote_for_further_offers(){
		System.out.println("promote for further offers>>>>>");
	}
	
	
	
	
}

