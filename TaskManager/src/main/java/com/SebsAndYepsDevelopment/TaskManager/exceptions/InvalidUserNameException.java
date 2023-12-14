package com.SebsAndYepsDevelopment.TaskManager.exceptions;

public class InvalidUserNameException extends Exception{
    public InvalidUserNameException()
    {
        super("The username is already taken");
    }
}
