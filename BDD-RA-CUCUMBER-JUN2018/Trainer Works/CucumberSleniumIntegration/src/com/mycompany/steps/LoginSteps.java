package com.mycompany.steps;

import java.util.List;

import org.openqa.selenium.WebDriver;

import com.mycompany.excelread.ApachePOIExcelRead;
import com.mycompany.pom.LoginAppPOM;
import com.mycompany.util.DriverFactory;
import com.mycompany.util.Utils;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	private LoginAppPOM loginApp; 
	private WebDriver driver; 
	private String baseUrl; 
	
	@Given("^the browser is loaded$")
	public void the_browser_is_loaded() throws Throwable {
		driver = DriverFactory.getDriver("chrome");
		baseUrl = "http://probits.in/loginapp/";
		loginApp = new LoginAppPOM(driver); 
		driver.get(baseUrl);
	}
	
	@Given("^login app page click on login link$")
	public void login_app_page_click_on_login_link() throws Throwable {
		loginApp.clickLogin();
		Utils.sleep(1500);
	}

	/*@And("^enter user name and password$")
	public void enter_user_name_and_password() throws Throwable {

		loginApp.sendEmail("adith.naveen@gmail.com");
		Utils.sleep(1500);
		loginApp.sendPassword("1234");
		Utils.sleep(1500);
	}*/

	@And("^enter user name and password$")
	public void enter_user_name_and_password() throws Throwable {
		String fileName= "C:/Users/Naveen/Desktop/Testing.xlsx";
		 
		for(List<Object> temp : ApachePOIExcelRead.getExcelContent(fileName)){
			System.out.println("processing " + temp.get(0) +", " + temp.get(1));
		
			loginApp.sendEmail(temp.get(0).toString());
			Utils.sleep(1000);
			loginApp.sendPassword(temp.get(1).toString());
			Utils.sleep(10000);
		}
		
		

	}
	
	
	
	@When("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
		loginApp.clickLoginBtn();
	}

	@Then("^check the user name exists$")
	public void check_the_user_name_exists() throws Throwable {
		System.out.println("TODO Pending for Check the suer name exists ");
	}

	@And("^update the user state and city$")
	public void update_the_user_state_and_city() throws Throwable {
		System.out.println("Update user state and city Pending... ");
	}
}
