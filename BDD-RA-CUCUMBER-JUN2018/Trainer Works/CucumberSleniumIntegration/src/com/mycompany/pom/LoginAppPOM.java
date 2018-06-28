package com.mycompany.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginAppPOM {

	private WebDriver driver; 
	
	
	public LoginAppPOM(WebDriver driver){
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(xpath="//*[@id='bs-example-navbar-collapse-1']/ul/li[2]/a")
	private WebElement loginLink; 
	
	@FindBy(name="email")
	private WebElement email;
	
	@FindBy(name="pass")
	private WebElement password; 
	
	@FindBy(name="login")
	private WebElement loginBtn; 
	
	@FindBy(name="name")
	private WebElement userName; 
	
	
	public void clickLogin(){
		this.loginLink.click();
	}
	
	public void sendEmail(String email){
		this.email.clear(); 
		this.email.sendKeys(email);
	}
	
	public void sendPassword(String pass){
		this.password.clear(); 
		this.password.sendKeys(pass);
	}
	
	public void clickLoginBtn(){
		this.loginBtn.click();
	}
	
	public void sendUserName(String userName){
		this.userName.clear(); 
		this.userName.sendKeys(userName);
	}
	
	public String getUserName(){
		String userName = this.userName.getAttribute("value");
		return userName; 
	}
	
}
