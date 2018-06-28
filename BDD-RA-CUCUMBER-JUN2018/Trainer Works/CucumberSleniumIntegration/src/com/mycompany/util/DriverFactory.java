package com.mycompany.util;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.session.ChromeFilter;

import org.openqa.selenium.chrome.ChromeDriver; 

public class DriverFactory {

	public static WebDriver getDriver(String driverName){
	
		WebDriver driver = null;
		
		if(driverName.equals("chrome")){
			
			// return chrome driver with the details 
			System.setProperty(Driver.CHROME_KEY, Driver.CHROME_PATH); 
			driver = new ChromeDriver(); 
		}else if(driverName.equals("firefox")){
			
		}else if(driverName.equals("ie")){
			
		}
		
		driver.manage().window().maximize(); 
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		return driver;
		
	}
	
	
}
