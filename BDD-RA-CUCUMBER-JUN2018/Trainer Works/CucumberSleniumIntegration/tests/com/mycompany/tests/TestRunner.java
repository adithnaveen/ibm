package com.mycompany.tests;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features={"resources/com/mycompany/features"}, 
		glue={"com.mycompany.steps","com.mycompany.hooks"}, 
		monochrome=true, 
		plugin={"pretty"}
)
public class TestRunner {
}
