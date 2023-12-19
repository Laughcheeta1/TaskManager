package com.SebsAndYepsDevelopment.TaskManager.reposiroty;

import com.SebsAndYepsDevelopment.TaskManager.entity.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {
    @Query("{ 'name' : { '$regex' : ?0, '$options': 'i' } }")
    List<Task> getTasksByName(String name);
}
