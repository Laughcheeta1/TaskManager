package com.SebsAndYepsDevelopment.TaskManager.entity;

import com.SebsAndYepsDevelopment.TaskManager.proyectEnums.State;
import com.SebsAndYepsDevelopment.TaskManager.proyectInterfaces.Updatable;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@AllArgsConstructor
public class Task implements Updatable<Task> {
    @Id
    private String id;
    private String name;
    private String category; // TODO: define
    private Date expirationDate;
    private State state;

    @Override
    public void update(Task newValues) {
        if (newValues.getName() != null)
            setName(newValues.getName());

        if (newValues.getCategory() != null)
            setCategory(newValues.getCategory());

        if (newValues.getExpirationDate() != null)
            setExpirationDate(newValues.getExpirationDate());

        if (newValues.getState() != null)
            setState(newValues.getState());
    }
}
