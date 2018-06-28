package com.mycompany.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.mycompany.beans.Message;
import com.mycompany.services.MessageService;


// http://localhost:8080/RestWorks -> web.xml 
// url-pattern waiting /resources/* 
// http://localhost:8080/RestWorks/resources/message


@Path("/message")
public class MessageResource {

	// this object will have all CRUD Operations Methods 
//	static MessageService messageService = new MessageService();
	static MessageService messageService = new MessageService(); 
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Message postMessage(Message message){
		return messageService.insertMessage(message);
	}
	
	@GET
	@Path("/{messageId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Message getMessage(@PathParam("messageId") long messageId){
		Message message = messageService.getMessage((int)messageId);
		return message;
	}
	

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Message> getMessages()
	{
		return messageService.getAllMessages();
	}
	
}
