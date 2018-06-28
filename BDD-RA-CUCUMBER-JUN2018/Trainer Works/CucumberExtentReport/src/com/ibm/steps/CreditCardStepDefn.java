package com.ibm.steps;

import org.junit.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreditCardStepDefn {

	@Given("^the customer works$")
	public void the_customer_works() throws Throwable {
		System.out.println("the customer works>>> implementaed>>>>");
	}

	@Given("^in the \"([^\"]*)\" office$")
	public void in_the_office(String arg1) throws Throwable {
		
		System.out.println("in the "+arg1+" office");

	}

	@When("^the salary is more than \"([^\"]*)\"$")
	public void the_salary_is_more_than(String arg1) throws Throwable {
		
		int salary = Integer.parseInt(arg1); 
		
		if(salary < 20000){
			Assert.fail();
		}else {
			System.out.println("the salary is more than " + arg1);
			System.out.println("Processing next level ");
		}

	}

	@When("^and \"([^\"]*)\" time employement$")
	public void and_time_employement(String arg1) throws Throwable {

			System.out.println("and "+arg1+" time employement");

	}

	@When("^the credit score is more than \"([^\"]*)\"$")
	public void the_credit_score_is_more_than(String arg1) throws Throwable {

		int creditScore = Integer.parseInt(arg1); 
		
		if(creditScore<300){
			Assert.fail("Sorry cannot grant the credit card with this score " + creditScore) ;
		}else if(creditScore >=300 && creditScore < 550){
			Assert.fail("Sorry Tentatively we cannot process " + creditScore);
		}else {
			System.out.println("Processing the credit card for the score " + creditScore);
		}

	}

	@Then("^do the physical background check$")
	public void do_the_physical_background_check() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^issue the card$")
	public void issue_the_card() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

}
