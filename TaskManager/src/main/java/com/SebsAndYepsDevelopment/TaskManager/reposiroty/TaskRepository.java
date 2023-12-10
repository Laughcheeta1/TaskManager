package com.SebsAndYepsDevelopment.TaskManager.reposiroty;

import com.SebsAndYepsDevelopment.TaskManager.entity.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {

}
