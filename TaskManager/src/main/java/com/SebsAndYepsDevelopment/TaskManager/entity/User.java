package com.SebsAndYepsDevelopment.TaskManager.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
public class User {
    @Id
    private String id;
    private String firstName;
    private String secondName;
    private String number;
    private String email;
    private String userName;
    private String password;
}
