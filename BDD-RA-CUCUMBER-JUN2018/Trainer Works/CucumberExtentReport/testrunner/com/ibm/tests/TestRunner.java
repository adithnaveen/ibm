package com.ibm.tests;

import static org.junit.Assert.*;

import java.io.File;

import org.junit.AfterClass;
import org.junit.Test;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
		features={"resources/com/ibm/features"}, 
		glue={"com.ibm.steps"}, 
		monochrome=true, 
		plugin={"pretty",
		"com.cucumber.listener.ExtentCucumberFormatter:target/html/extentreport/report.html"}
	)
public class TestRunner {

	@AfterClass
	public static void tearDown(){
		Reporter.loadXMLConfig(new File("resources/extent-config.xml"));
		Reporter.setSystemInfo("IBM Test User", System.getProperty("user.name"));
		Reporter.setSystemInfo("Test User", "IBM User");
		Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name"));
		Reporter.setSystemInfo("Version Number", "3.4.5.6");
		Reporter.setTestRunnerOutput("Cucumber Reporting for Testing");
	}

}
