package com.mycompany.test;

import static com.jayway.restassured.RestAssured.when; 
import static com.jayway.restassured.RestAssured.given; 


import static org.hamcrest.Matchers.empty;
import static org.hamcrest.Matchers.is;

import static org.junit.Assert.*;

import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.http.ContentType;

public class MessageTest {

	@BeforeClass
	
	public static void init(){
		String url ="http://localhost:8080/RestWorks/resources";
		RestAssured.baseURI = url; 
	}
	
	
	@Ignore
	@Test
	public void getMessageNegative(){
		when()
			.get("/message")
			.then()
			.statusCode(200)
				.body("", is(empty())); 
	}
	
	
	@Test
	public void getMessageWithIdTest(){
		
		//		{"messageId":105,"msg":"Hello Welcome, in IBM ","author":"Srikanth",
		//		"creationDate":"20-2-18"}
		
		int messageId = 105; 
		
		given().
			pathParam("messageId", messageId)
			.when().
				get("/message/{messageId}")
			.then()
				.statusCode(200)
				.body("msg", is("Hello Welcome, in IBM "))
				.body("author", is("Srikanth"))
				.body("creationDate", is("20-2-18")); 
				
			
		
	}
	
	@Test
	public void postMessageTest(){
		Message message = new Message(); 
		
		message.setMessageId(201);
		message.setAuthor("Karthik");
		message.setMsg("Testing message from RA");
		message.setCreationDate("28-6-2018");
		
		given().
			contentType(ContentType.JSON)
			.body(message)
		.when()
			.post("/message")
		.then()
			.statusCode(200)
			.body("messageId", is(message.getMessageId()))
			.body("msg", is("Testing message from RA"))
			.body("author", is("Karthik"))
			.body("creationDate", is("28-6-2018")); 
		
		
	}
	
	
	
	
	
	@Test
	public void googleTest() {
		given().
			// there could be conditions 
		when().
			get("http://google.com")
		
		.then().
			// status code 200 OK 
				statusCode(200); 
	}	

}
