package com.SebsAndYepsDevelopment.TaskManager.service;

import com.SebsAndYepsDevelopment.TaskManager.entity.Task;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.TaskNotFoundException;
import com.SebsAndYepsDevelopment.TaskManager.proyectEnums.State;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TaskService {
    List<Task> getTasksByName(String name, String userName);
    List<Task> getAllTasks(String userName);
    void createTask(Task task);
    Task getTaskById(String id, String userName) throws TaskNotFoundException;
    void updateTask(String taskId, Task toUpdate) throws TaskNotFoundException;
    void deleteTask(String taskId);
    void changeTaskState(String id, State state);
}
