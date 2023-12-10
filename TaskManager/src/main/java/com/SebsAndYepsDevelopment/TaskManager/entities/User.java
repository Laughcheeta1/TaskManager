package com.SebsAndYepsDevelopment.TaskManager.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
public class User {
    private String firstName;
    private String secondName;
    private String number;
    private String email;
    private String userName;
    private String password;
}
