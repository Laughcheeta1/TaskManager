package com.SebsAndYepsDevelopment.TaskManager.entity;

import com.SebsAndYepsDevelopment.TaskManager.proyectInterfaces.Updatable;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
public class User implements Updatable<User> {
    @Id
    private String id;
    private String email;
    private String userName; // TODO: make this unique in the database
    private String password;

    @Override
    public void update(User newValues) {
        if (newValues.getEmail() != null)
            setEmail(newValues.getEmail());

        if (newValues.getUserName() != null)
            setUserName(newValues.getUserName());

        if (newValues.getPassword() != null)
            setPassword(newValues.getPassword());
    }
}
