package com.SebsAndYepsDevelopment.TaskManager.entity;

public class NoCookiesException extends Exception{
    public NoCookiesException() {
        super("There is no cookie to validate");
    }
}
