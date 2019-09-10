package com.example.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.models.Task;


public interface TaskRepository extends MongoRepository<Task, String>{
	Task findById(ObjectId id);

}
