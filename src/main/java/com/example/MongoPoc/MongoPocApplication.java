package com.example.MongoPoc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.example.repositories.TaskRepository;

@SpringBootApplication(scanBasePackages = {"com.example"})
@EnableMongoRepositories(basePackageClasses = TaskRepository.class)
public class MongoPocApplication {

	public static void main(String[] args) {
		SpringApplication.run(MongoPocApplication.class, args);
	}

}
