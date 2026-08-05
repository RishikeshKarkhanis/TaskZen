package com.rishikesh.taskzen.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.rishikesh.taskzen.constants.Category;
import com.rishikesh.taskzen.constants.Priority;
import com.rishikesh.taskzen.constants.Status;
import com.rishikesh.taskzen.document.Task;

public interface TaskRepository extends MongoRepository<Task, String> {

    Page<Task> findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(
            String title,
            String description,
            Pageable pageable
    );

    Page<Task> findByStatus(
            Status status,
            Pageable pageable
    );

    Page<Task> findByPriority(
            Priority priority,
            Pageable pageable
    );

    Page<Task> findByCategory(
            Category category,
            Pageable pageable
    );

}