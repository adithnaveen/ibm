package com.ibm.discount.steps;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {

	@Given("^the browser is open$")
	public void the_browser_is_open() throws Throwable {
		System.out.println("the browser is open ...");
	}

	@When("^username and password is entered$")
	public void username_and_password_is_entered(DataTable dataTable)
			throws Throwable {
		System.out.println("User name and password is entered ....");
		
		List<Map<String, String >> dataList = dataTable.asMaps(String.class, String.class);
		
		for(Map<String, String> temp : dataList){
			System.out.println("User Name :" + temp.get("username") +", Password " + 
						temp.get("password"));
		}
		
	}

	@And("^click on submit button$")
	public void click_on_submit_button() throws Throwable {
		System.out.println("Click on submit button ...");
	}

	@Then("^validate user credentials$")
	public void validate_user_credentials() throws Throwable {
		System.out.println("Validate user credentials... ");
	}
}
