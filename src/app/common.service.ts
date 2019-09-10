import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiUrl = "http://localhost:8080/api/"
  constructor(private http: HttpClient) { }
  // private headers = new HttpHeaders({'Content-Type': 'application/json'});

  saveTask(newTask) {
    return this.http.post(this.apiUrl + 'saveTask', newTask);
  }

  getTasks() {
    return this.http.get(this.apiUrl + 'getTasks');
  }

  deleteTask(taskId) {
    return this.http.delete(this.apiUrl + 'deleteTask', {params: {id: taskId}});
  }

  getATask(taskId) {
    return this.http.get(this.apiUrl + 'getATask', {params: {id: taskId}});
  }

  editTask(newTask, taskId) {
    console.log(newTask);
    console.log(taskId);
    return this.http.put(this.apiUrl + 'editTask' + '/' + taskId, newTask);
  }
}
