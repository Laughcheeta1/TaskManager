package com.SebsAndYepsDevelopment.TaskManager.reposiroty;

import com.SebsAndYepsDevelopment.TaskManager.entity.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {
    @Query("{ 'userName' :  ?1, 'name' : { '$regex' : ?0, '$options': 'i' } }")
    List<Task> getTasksByNameAndUserName(String name, String userName);

    List<Task> findAllByUserName(String userName);

    Optional<Task> findByIdAndUserName(String id, String userName);
}
