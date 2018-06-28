package com.mycompany.test;

public class Message {
	private int messageId;
	private String msg;
	private String author;
	private String creationDate;

	public Message() {
	}

	public int getMessageId() {
		return messageId;
	}

	public void setMessageId(int messageId) {
		this.messageId = messageId;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(String creationDate) {
		this.creationDate = creationDate;
	}

	public Message(int messageId, String msg, String author, String creationDate) {
		super();
		this.messageId = messageId;
		this.msg = msg;
		this.author = author;
		this.creationDate = creationDate;
	}

}
