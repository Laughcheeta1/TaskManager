package com.SebsAndYepsDevelopment.TaskManager.service;

import com.SebsAndYepsDevelopment.TaskManager.entity.User;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.UserNotFoundException;
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
    public User getUserById(String id) throws UserNotFoundException {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    @Override
    public void addUser(User user) {
        userRepository.insert(user);
    }

    @Override
    public void updateUser(String id, User toUpdate) throws UserNotFoundException {
        User userInDb = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
        userInDb.update(toUpdate);
        userRepository.save(userInDb);
    }

    @Override
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }
}
