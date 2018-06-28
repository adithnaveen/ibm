package com.ibm.testrunner;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"resources/com/ibm/features"}, 
		glue={"com.ibm.stepdefn"}, 
		plugin={"pretty", "html:target/cucumber-html-report"}, 
//		plugin={"pretty", "json:target/cucumber-json-report"},
//		plugin={"usage"}, 
//		plugin={"pretty"},
		monochrome=true, 
		tags={"@Sanity,@Smoke"}
//		dryRun=true
)
public class TestRunner {
}
