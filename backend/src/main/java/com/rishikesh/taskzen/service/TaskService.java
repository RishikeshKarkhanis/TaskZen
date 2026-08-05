package com.rishikesh.taskzen.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.rishikesh.taskzen.document.Task;
import com.rishikesh.taskzen.dto.TaskRequestDTO;
import com.rishikesh.taskzen.dto.TaskResponseDTO;
import com.rishikesh.taskzen.dto.TaskSearchCriteria;
import com.rishikesh.taskzen.exception.ResourceNotFoundException;
import com.rishikesh.taskzen.mapper.TaskMapper;
import com.rishikesh.taskzen.repository.TaskRepository;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;

    public TaskService(TaskRepository taskRepository,
                       TaskMapper taskMapper) {
        this.taskRepository = taskRepository;
        this.taskMapper = taskMapper;
    }

    // Create Task
    public TaskResponseDTO createTask(TaskRequestDTO dto) {

        Task task = taskMapper.toEntity(dto);

        task.setCreatedAt(LocalDateTime.now());
        task.setUpdatedAt(LocalDateTime.now());

        Task savedTask = taskRepository.save(task);

        return taskMapper.toResponseDTO(savedTask);
    }

    // Get All Tasks
    public List<TaskResponseDTO> getAllTasks(TaskSearchCriteria criteria) {

        Sort sort = criteria.getDirection().equalsIgnoreCase("asc")
                ? Sort.by(criteria.getSort()).ascending()
                : Sort.by(criteria.getSort()).descending();

        Pageable pageable = PageRequest.of(
                criteria.getPage(),
                criteria.getSize(),
                sort
        );

        Page<Task> taskPage;

        if (criteria.getSearch() != null &&
                !criteria.getSearch().isBlank()) {

            taskPage = taskRepository
                    .findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(
                            criteria.getSearch(),
                            criteria.getSearch(),
                            pageable
                    );

        } else if (criteria.getStatus() != null) {

            taskPage = taskRepository.findByStatus(
                    criteria.getStatus(),
                    pageable
            );

        } else if (criteria.getPriority() != null) {

            taskPage = taskRepository.findByPriority(
                    criteria.getPriority(),
                    pageable
            );

        } else if (criteria.getCategory() != null) {

            taskPage = taskRepository.findByCategory(
                    criteria.getCategory(),
                    pageable
            );

        } else {

            taskPage = taskRepository.findAll(pageable);

        }

        return taskPage.getContent()
                .stream()
                .map(taskMapper::toResponseDTO)
                .toList();
    }

    // Get Task By Id
    public TaskResponseDTO getTaskById(String id) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Task not found with id : " + id));

        return taskMapper.toResponseDTO(task);
    }

    // Update Task
    public TaskResponseDTO updateTask(
            String id,
            TaskRequestDTO dto) {

        Task existingTask = taskRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Task not found with id : " + id));

        taskMapper.updateEntityFromDto(dto, existingTask);

        existingTask.setUpdatedAt(LocalDateTime.now());

        Task updatedTask = taskRepository.save(existingTask);

        return taskMapper.toResponseDTO(updatedTask);
    }

    // Delete Task
    public void deleteTask(String id) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Task not found with id : " + id));

        taskRepository.delete(task);
    }

}