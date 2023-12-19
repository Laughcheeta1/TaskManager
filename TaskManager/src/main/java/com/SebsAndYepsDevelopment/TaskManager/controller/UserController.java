package com.SebsAndYepsDevelopment.TaskManager.controller;

import com.SebsAndYepsDevelopment.TaskManager.entity.User;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.InvalidUserNameException;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.UserNotFoundException;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.WrongPasswordException;
import com.SebsAndYepsDevelopment.TaskManager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody User user) throws UserNotFoundException, WrongPasswordException {
        System.out.println("Started login user process");
        return ResponseEntity.ok(userService.loginUser(user));
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) throws InvalidUserNameException {
        System.out.println("Started register user process");
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.registerUser(user));
    }
}
