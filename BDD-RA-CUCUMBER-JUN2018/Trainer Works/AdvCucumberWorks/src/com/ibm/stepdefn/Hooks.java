package com.ibm.stepdefn;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	@Before
	public void setUp(){
		System.out.println("------------------ SetUp Executed ------------------------");
	}
	
	@After
	public void tearDown(){
		System.out.println("------------------ TearDown Executed ------------------------");
		
	}
	
	@Before(value="@Sanity")
	public void setUpSanity(){
		System.out.println("===================== SetUp Executed  only for Sanity ==========================");
	}
	
}
