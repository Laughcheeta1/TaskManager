package com.SebsAndYepsDevelopment.TaskManager.service;

import com.SebsAndYepsDevelopment.TaskManager.entity.User;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.InvalidUserNameException;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.UserNotFoundException;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.WrongPasswordException;

public interface UserService {
    void loginUser(User user) throws UserNotFoundException, WrongPasswordException;

    void registerUser(User user) throws InvalidUserNameException;
}
