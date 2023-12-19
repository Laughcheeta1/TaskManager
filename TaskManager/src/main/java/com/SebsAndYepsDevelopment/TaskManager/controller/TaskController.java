package com.SebsAndYepsDevelopment.TaskManager.controller;

import com.SebsAndYepsDevelopment.TaskManager.entity.Task;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.TaskNotFoundException;
import com.SebsAndYepsDevelopment.TaskManager.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
@CrossOrigin
public class TaskController {
    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // TODO: get Task by name

    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks()
    {
        return ResponseEntity.ok(taskService.getAllTasks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable("id") String id) throws TaskNotFoundException {
        return ResponseEntity.ok(taskService.getTaskById(id));
    }

    @PostMapping
    public ResponseEntity<String> addTask(@RequestBody Task task)
    {
        taskService.createTask(task);
        return ResponseEntity.status(HttpStatus.CREATED).body("Task successfully created");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateTask(@PathVariable("id") String id, @RequestBody Task toUpdate) throws TaskNotFoundException {
        taskService.updateTask(id, toUpdate);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Task updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable("id") String id)
    {
        taskService.deleteTask(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
