package com.SebsAndYepsDevelopment.TaskManager.exceptions;

public class UserNotFoundException extends Exception{
    public UserNotFoundException(String id)
    {
        super(String.format("The user with the ID '%s' does not exist", id));
    }
}
