package com.SebsAndYepsDevelopment.TaskManager.controller;

import com.SebsAndYepsDevelopment.TaskManager.entity.User;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.UserNotFoundException;
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

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") String id) throws UserNotFoundException {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable("username") String username) throws UserNotFoundException {
        return ResponseEntity.ok(userService.getUserByUserName(username));
    }

    @PostMapping
    public ResponseEntity<String> addUser(@RequestBody User user)
    {
        userService.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("The user has successfully been created");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable("id") String id, @RequestBody User toUpdate) throws UserNotFoundException {
        userService.updateUser(id, toUpdate);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("The user has successfully been updated");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") String id)
    {
        userService.deleteUser(id);
        return ResponseEntity.ok().body("The user has successfully been deleted");
    }
}
