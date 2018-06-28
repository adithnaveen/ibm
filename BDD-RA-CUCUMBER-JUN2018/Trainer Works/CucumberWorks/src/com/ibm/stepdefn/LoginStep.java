package com.ibm.stepdefn;

import java.util.List;
import java.util.Map;

import com.ibm.beans.LoginBean;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

// ctrl + shift + o 
public class LoginStep {

	@Given("^the browser is open$")
	public void the_browser_is_open() throws Throwable {
		// driver.get("somewebstie.com")
		System.out.println("the browser is open...");
	}

	// the injection for the method is done by cucumber 
	/*@Given("^the username and password is entered$")
	public void the_username_and_password_is_entered(List<LoginBean> loginList)
				throws Throwable {
		System.out.println("the username and password is entered...");

		System.out.println("................................................................");
		for(LoginBean temp : loginList){
			System.out.println("User Name is " + temp.getUsername());
			System.out.println("Password is " + temp.getPassword());
			System.out.println("Role is " + temp.getRoles());
			System.out.println("-----------------------------------------------------");
		}
		System.out.println("................................................................");
	}*/

	@When("^credentials are validated$")
	public void credentials_are_validated() throws Throwable {
		System.out.println("credentials are validated....");
	}

	@Then("^take user to home page$")
	public void take_user_to_home_page() throws Throwable {
		System.out.println("take user to home page...");
	}
	
	// taking the values as datatable 
	
	
	@Given("^the username and password is entered$")
	public void the_username_and_password_is_entered(DataTable dataTable){
		System.out.println("The usernamd and password for testing goes here...");
		
		List<Map<String, String>> dataList = dataTable.asMaps(String.class, String.class); 
		
		for(Map<String, String> temp : dataList){

			System.out.println("***************User Details **************************");
			System.out.println("User Name : " + temp.get("username"));
			System.out.println("Password :" + temp.get("password"));
			System.out.println("Role : " + temp.get("roles"));
		}
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
