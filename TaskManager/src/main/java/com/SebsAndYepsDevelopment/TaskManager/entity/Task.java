package com.SebsAndYepsDevelopment.TaskManager.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@AllArgsConstructor
public class Task {
    @Id
    private String id;
    private String name;
    private String category; // TODO: define
    private Date expirationDate;
    private State state;
}
