package com.SebsAndYepsDevelopment.TaskManager.exceptions;

import org.apache.logging.log4j.message.StringFormattedMessage;

public class TaskNotFoundException extends Exception{
    public TaskNotFoundException(String id) {
        super(String.format("The task with the ID '%s' does not exist", id));
    }
}
