package com.rishikesh.taskzen.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.rishikesh.taskzen.constants.Category;
import com.rishikesh.taskzen.constants.Priority;
import com.rishikesh.taskzen.constants.Status;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TaskResponseDTO {

    private String id;

    private String title;

    private String description;

    private Priority priority;

    private Status status;

    private Category category;

    private LocalDate dueDate;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}