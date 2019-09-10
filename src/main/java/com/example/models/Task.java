package com.example.models;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "tasks")
public class Task {
	@Id
	private ObjectId id;
	private String taskName;
	private String parentTask;
	private int priorityFrom;
	private int priorityTo;
	private Date startDate;
	private Date endDate;
	public String getId() {
		return id.toHexString();
	}
	public void setId(ObjectId id) {
		this.id = id;
	}
	public String getTaskName() {
		return taskName;
	}
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	public String getParentTask() {
		return parentTask;
	}
	public void setParentTask(String parentTask) {
		this.parentTask = parentTask;
	}
	public int getPriorityFrom() {
		return priorityFrom;
	}
	public void setPriorityFrom(int priorityFrom) {
		this.priorityFrom = priorityFrom;
	}
	public int getPriorityTo() {
		return priorityTo;
	}
	public void setPriorityTo(int priorityTo) {
		this.priorityTo = priorityTo;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public Task(ObjectId id, String taskName, String parentTask, int priorityFrom, int priorityTo, Date startDate,
			Date endDate) {
//		super();
		this.id = id;
		this.taskName = taskName;
		this.parentTask = parentTask;
		this.priorityFrom = priorityFrom;
		this.priorityTo = priorityTo;
		this.startDate = startDate;
		this.endDate = endDate;
	}

}
