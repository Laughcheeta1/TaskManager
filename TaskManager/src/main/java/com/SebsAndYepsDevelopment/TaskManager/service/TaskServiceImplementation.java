package com.SebsAndYepsDevelopment.TaskManager.service;

import com.SebsAndYepsDevelopment.TaskManager.entity.Task;
import com.SebsAndYepsDevelopment.TaskManager.exceptions.TaskNotFoundException;
import com.SebsAndYepsDevelopment.TaskManager.proyectEnums.State;
import com.SebsAndYepsDevelopment.TaskManager.reposiroty.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.task.TaskRejectedException;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class TaskServiceImplementation implements TaskService{
    private final TaskRepository taskRepository;

    @Autowired
    public TaskServiceImplementation(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getTasksByName(String name, String userName)
    {
        return taskRepository.getTasksByNameAndUserName(name, userName);
    }

    public List<Task> getAllTasks(String userName)
    {
        List<Task> tasks = taskRepository.findAllByUserName(userName);
        tasks.sort(new Comparator<Task>() {
            @Override
            public int compare(Task o1, Task o2) {
                if (o1.getExpirationDate() == null)
                    return 1;
                if (o2.getExpirationDate() == null)
                    return -1;
                return (o1.getExpirationDate().compareTo(o2.getExpirationDate()));
            }
        });
        System.out.println(tasks);
        return tasks;
    }

    public Task getTaskById(String id, String userName) throws TaskNotFoundException {
        return taskRepository.findByIdAndUserName(id, userName).orElseThrow(() -> new TaskNotFoundException(id));
    }

    public void createTask(Task task)
    {
        // TODO: add the validation of the task we are about to enter
        taskRepository.insert(task);
    }

    public void updateTask(String taskId, Task toUpdate) throws TaskNotFoundException
    {
        Task taskInDb = taskRepository.findById(taskId).orElseThrow(() -> new TaskNotFoundException(taskId));
        taskInDb.update(toUpdate);
        taskRepository.save(taskInDb);
    }

    public void deleteTask(String taskId)
    {
        taskRepository.deleteById(taskId);
    }

    @Override
    public void changeTaskState(String id, State state) {
        Task taskInDb = taskRepository.findById(id).orElse(null); // This never going to be null, because of the way the front end works, this always exists.
        if (taskInDb == null || taskInDb.getState() == state)
            return;

        taskInDb.setState(state);
        taskRepository.save(taskInDb);
    }
}
