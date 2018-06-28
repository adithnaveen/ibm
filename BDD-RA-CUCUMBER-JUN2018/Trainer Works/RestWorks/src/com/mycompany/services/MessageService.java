package com.mycompany.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mycompany.beans.Message;

// this class shall get the data from DataBase class(DAO) 
public class MessageService {
	Map<Long, Message> messages = new HashMap<Long, Message>();
	
	// simulating we are hitting to DB and getting the details 
	public MessageService() {
		System.out.println("Consructor Invoked for Message Serivce.... ");
		
		Message message1 = new Message(101, "Hello Welcome", "Robert", new Date().toString());
		Message message2 = new Message(102, "We are learning REST", "Rakesh", 
				new Date().toString());
		Message message3 = new Message(103, "We are learning REST", "Prakash", 
				new Date().toString());
		Message message4 = new Message(104, "How was your day", "Syed", 
				new Date().toString());
		
		messages.put(101L, message1);
		messages.put(102L, message2); 
		messages.put(103L, message3);
		messages.put(104L, message4);
		
	}
	// all CRUD Operations 
	
	public Message getMessage(long messageId){
		return messages.get(messageId);
	}
	
	public List<Message> getAllMessages(){
		return new ArrayList<Message>(messages.values());
	}
	
	public Message insertMessage(Message message){
		messages.put((long) message.getMessageId(), message);
		return message; 
	}
	
	public Message updateMessage(Message message){
		messages.put((long) message.getMessageId(), message);
		return message; 
	}
	
	public String deleteMessage(long messageId){
		if(this.getMessage(messageId) !=null){
			messages.remove(messageId);
			return "Message deleted Successfully " + messageId;
		}else{
			return "Sorry Message Not Found With Id : "+ messageId;
		}
	}

	public List<Message> getAllMessagePagination(int start, int size) {

		ArrayList<Message> list = new
				ArrayList<Message>(messages.values()); 
		
		// 4->  list.size()
		// start = 2 and size = 2 
		if(start + size > list.size()+1){
			return new ArrayList<Message>();
		}

		return list.subList(start, start+size);
		
	}
	
	
	
	
	
	
	
	
	
	
}
