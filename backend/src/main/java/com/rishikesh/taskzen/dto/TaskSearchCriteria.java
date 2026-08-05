package com.rishikesh.taskzen.dto;

import com.rishikesh.taskzen.constants.Category;
import com.rishikesh.taskzen.constants.Priority;
import com.rishikesh.taskzen.constants.Status;

import lombok.Data;

@Data
public class TaskSearchCriteria {

    private String search;

    private Status status;

    private Priority priority;

    private Category category;

    private String sort = "createdAt";

    private String direction = "desc";

    private Integer page = 0;

    private Integer size = 10;

}