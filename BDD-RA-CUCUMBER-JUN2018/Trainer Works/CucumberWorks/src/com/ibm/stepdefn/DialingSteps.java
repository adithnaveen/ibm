package com.ibm.stepdefn;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DialingSteps {

	@Given("the user has the dialing phone number")
	public void the_user_has_the_dialing_phone_number(){
		System.out.println("the user has the dialing phone number>>>>");
	}
	
	@When("dials the number")
	public void dials_the_number(){
		System.out.println("dials the number>>>>");
	}

	
	@And("does not connect for individual")
	public void does_not_connect_for_individual(){
		System.out.println("does not connect for individual>>>>");
	}
	
	@Given("user resides in india")
	public void user_resides_in_india(){
		System.out.println("user resides in india>>>>");
	}
	
	
	@Then("get a ([a-zA-Z]{1,}) tone")
	public void get_a_broken_tone(String toneStatus){
		System.out.println("get a "+toneStatus+" tone>>>");
	}	
}
