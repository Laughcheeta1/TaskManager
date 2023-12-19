package com.SebsAndYepsDevelopment.TaskManager.service;

import com.SebsAndYepsDevelopment.TaskManager.entity.Task;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.TaskNotFoundException;
import com.SebsAndYepsDevelopment.TaskManager.proyectEnums.State;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TaskService {
    List<Task> getAllTasks();
    Task getTaskById(String id) throws TaskNotFoundException;
    void createTask(Task task);
    void updateTask(String taskId, Task toUpdate) throws TaskNotFoundException;
    void deleteTask(String taskId);
    void changeTaskState(String id, State state);
}
