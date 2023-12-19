package com.SebsAndYepsDevelopment.TaskManager.controller;

import com.SebsAndYepsDevelopment.TaskManager.entity.Task;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.TaskNotFoundException;
import com.SebsAndYepsDevelopment.TaskManager.proyectEnums.State;
import com.SebsAndYepsDevelopment.TaskManager.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {
    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/user/{userName}/getTaskByName/{name}")
    public ResponseEntity<List<Task>> getTasksByName(@PathVariable("userName") String userName, @PathVariable("name") String name)
    {
        return ResponseEntity.ok(taskService.getTasksByName(name, userName));
    }

    @GetMapping("/user/{userName}")
    public ResponseEntity<List<Task>> getAllTasks(@PathVariable("userName") String userName)
    {
        return ResponseEntity.ok(taskService.getAllTasks(userName));
    }

    @GetMapping("/user/{userName}/task/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable("userName") String userName, @PathVariable("id") String id) throws TaskNotFoundException {
        return ResponseEntity.ok(taskService.getTaskById(id, userName));
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

    @PutMapping("/changeState/{id}/state/{newState}")
    public ResponseEntity<String> changeTaskState(@PathVariable("id") String id, @PathVariable("newState") State state)
    {
        taskService.changeTaskState(id, state);
        return ResponseEntity.ok(String.format("The state of the task %s has been successfully changed to %s", id, state));
    }
}
