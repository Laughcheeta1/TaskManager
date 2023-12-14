package com.SebsAndYepsDevelopment.TaskManager.exceptions;

public class WrongPasswordException extends Exception {
    public WrongPasswordException()
    {
        super("The password is incorrect");
    }
}
