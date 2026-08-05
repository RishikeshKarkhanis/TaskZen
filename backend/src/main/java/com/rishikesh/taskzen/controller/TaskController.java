package com.rishikesh.taskzen.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rishikesh.taskzen.constants.Category;
import com.rishikesh.taskzen.constants.Priority;
import com.rishikesh.taskzen.constants.Status;
import com.rishikesh.taskzen.dto.TaskRequestDTO;
import com.rishikesh.taskzen.dto.TaskResponseDTO;
import com.rishikesh.taskzen.dto.TaskSearchCriteria;
import com.rishikesh.taskzen.payload.ApiResponse;
import com.rishikesh.taskzen.service.TaskService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // Create Task
    @PostMapping
    public ResponseEntity<ApiResponse<TaskResponseDTO>> createTask(
            @Valid @RequestBody TaskRequestDTO dto) {

        TaskResponseDTO response = taskService.createTask(dto);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ApiResponse<>(
                        true,
                        "Task created successfully.",
                        response
                ));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<TaskResponseDTO>>> getAllTasks(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) Status status,
            @RequestParam(required = false) Priority priority,
            @RequestParam(required = false) Category category,
            @RequestParam(defaultValue = "createdAt") String sort,
            @RequestParam(defaultValue = "desc") String direction,
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size
    ) {

        TaskSearchCriteria criteria = new TaskSearchCriteria();

        criteria.setSearch(search);
        criteria.setStatus(status);
        criteria.setPriority(priority);
        criteria.setCategory(category);
        criteria.setSort(sort);
        criteria.setDirection(direction);
        criteria.setPage(page);
        criteria.setSize(size);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Tasks fetched successfully.",
                        taskService.getAllTasks(criteria)
                )
        );
    }

    // Get Task By Id
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<TaskResponseDTO>> getTaskById(
            @PathVariable String id) {

        TaskResponseDTO response = taskService.getTaskById(id);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Task fetched successfully.",
                        response
                )
        );
    }

    // Update Task
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<TaskResponseDTO>> updateTask(
            @PathVariable String id,
            @Valid @RequestBody TaskRequestDTO dto) {

        TaskResponseDTO response = taskService.updateTask(id, dto);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Task updated successfully.",
                        response
                )
        );
    }

    // Delete Task
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteTask(
            @PathVariable String id) {

        taskService.deleteTask(id);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Task deleted successfully.",
                        null
                )
        );
    }

}
