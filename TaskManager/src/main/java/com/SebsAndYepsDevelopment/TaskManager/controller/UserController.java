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

    @GetMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) throws UserNotFoundException, WrongPasswordException {
        System.out.println("Started login user process");
        userService.loginUser(user);
        return ResponseEntity.ok("The user has logged in");
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) throws InvalidUserNameException {
        System.out.println("Started register user process");
        userService.registerUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("The user has successfully been created");
    }
}
