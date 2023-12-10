package com.SebsAndYepsDevelopment.TaskManager.service;

import com.SebsAndYepsDevelopment.TaskManager.entity.User;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.UserNotFoundException;

public interface UserService {
    User getUserById(String id) throws UserNotFoundException;
    public User getUserByUserName(String userName) throws UserNotFoundException;
    void addUser(User user);
    void updateUser(String id, User toUpdate) throws UserNotFoundException;
    void deleteUser(String id);
}
