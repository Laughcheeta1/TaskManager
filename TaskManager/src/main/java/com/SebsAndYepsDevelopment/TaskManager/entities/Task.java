package com.SebsAndYepsDevelopment.TaskManager.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@AllArgsConstructor
public class Task {
    private String name;
    private String category; // TODO: define
    private Date expirationDate;
    private State state;
}
