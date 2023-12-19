package com.SebsAndYepsDevelopment.TaskManager.service;

import com.SebsAndYepsDevelopment.TaskManager.entity.User;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.InvalidUserNameException;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.UserNotFoundException;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.WrongPasswordException;
import com.SebsAndYepsDevelopment.TaskManager.reposiroty.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImplementation implements UserService{
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImplementation(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User loginUser(User user) throws UserNotFoundException, WrongPasswordException {
        System.out.println(user);
        User userInDatabase = userRepository.findByUserName(user.getUserName()).orElseThrow(UserNotFoundException::new);
        if (user.getPassword().compareTo(userInDatabase.getPassword()) != 0)
            throw new WrongPasswordException();
        return userInDatabase;
    }

    @Override
    public User registerUser(User user) throws InvalidUserNameException  { // TODO: finish this
        if (userRepository.findByUserName(user.getUserName()).isPresent())
            throw new InvalidUserNameException();

        // TODO: Check if there's something to finish here, I personally do not remember

        userRepository.insert(user);
        return user;
    }
}
