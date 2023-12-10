package com.SebsAndYepsDevelopment.TaskManager.service;

import com.SebsAndYepsDevelopment.TaskManager.reposiroty.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    private TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }


}
