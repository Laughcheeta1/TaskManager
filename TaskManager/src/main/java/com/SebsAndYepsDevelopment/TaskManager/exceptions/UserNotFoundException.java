package com.SebsAndYepsDevelopment.TaskManager.exceptions;

public class UserNotFoundException extends Exception{
    public UserNotFoundException()
    {
        super("The user does not exist");
    }
}
