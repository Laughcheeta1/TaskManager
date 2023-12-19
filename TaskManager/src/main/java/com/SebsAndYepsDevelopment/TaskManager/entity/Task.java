package com.SebsAndYepsDevelopment.TaskManager.entity;

import com.SebsAndYepsDevelopment.TaskManager.proyectEnums.AvailableColour;
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
    private String userName;
    private String name;
    private String category;
    private Date expirationDate;
    private State state;
    private AvailableColour colour;
    private String description;

    @Override
    public void update(Task newValues) {
        if (newValues.getUserName() != null)
            setUserName(newValues.getUserName());

        if (newValues.getName() != null)
            setName(newValues.getName());

        if (newValues.getCategory() != null)
            setCategory(newValues.getCategory());

        if (newValues.getExpirationDate() != null)
            setExpirationDate(newValues.getExpirationDate());

        if (newValues.getState() != null)
            setState(newValues.getState());

        if (newValues.getColour() != null)
            setColour(newValues.getColour());

        if (newValues.getDescription() != null)
            setDescription(newValues.getDescription());
    }
}
