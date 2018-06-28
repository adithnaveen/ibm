package com.ibm.stepdefn;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

// * - ZERO or more 
// + - One ore more 
// ? - Zero or One 
public class DialingSteps {

	@Given("^the user has the dialing \"([a-zA-Z]{1,})\" number$")
//	@Given("the user has the dialing \"([^\"]*)\" number")
	public void the_user_has_the_dialing_number(String phoneType){
		System.out.println("the user has the dialing  "+phoneType+" number>>>>");
	}
	
	@When("^dials the number$")
	public void dials_the_number(){
		System.out.println("dials the number>>>>");
	}

	
	@And("^does not connect for \"([a-zA-Z]{1,})\"$")
	public void does_not_connect_for(String userType){
		System.out.println("does not connect for "+userType+">>>>");
	}
	
	@Given("^user resides in \"([a-zA-Z]{1,})\"$")
	public void user_resides_in_country(String country){
		System.out.println("user resides in  "+country+">>>>");
	}
	
	@Then("^get a \"([a-zA-Z]{1,})\" tone$")
	public void get_a_broken_tone(String toneStatus){
		System.out.println("get a "+toneStatus+" tone>>>");
	}	
}
