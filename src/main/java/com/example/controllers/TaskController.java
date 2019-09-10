package com.example.controllers;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.models.Task;
import com.example.repositories.TaskRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class TaskController {
	@Autowired
	private TaskRepository taskRepository;
	
	
	@GetMapping(value = "/getTasks")
	public List<Task> getTasks() {
		return taskRepository.findAll();
	}
	
	@GetMapping(value = "/getATask")
	public Task getATask(@RequestParam ObjectId id) {
		return taskRepository.findById(id);
	}
	
	@PostMapping(value = "/saveTask")
	public Task saveTask(@RequestBody Task task) {
		task.setId(ObjectId.get());
		taskRepository.save(task);
		return task;
	}
	
	@DeleteMapping(value = "/deleteTask") 
	public void deleteTask(@RequestParam ObjectId id) {
		taskRepository.delete(taskRepository.findById(id));
	}
	
	@PutMapping(value = "/editTask/{id}") 
	public Task editTask(@PathVariable ObjectId id, @RequestBody Task task) {
		task.setId(id);
		taskRepository.save(task);
		return task;
	}
}
