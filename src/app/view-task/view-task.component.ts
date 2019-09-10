import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  tasks: any;
  constructor(private commonService: CommonService, private router: Router) { }
  ngOnInit() {
    this.commonService.getTasks().subscribe(data => this.tasks = data);
  }
  deleteTask(taskToBeDeleted) {
      // console.log(taskToBeDeleted);
      this.tasks = this.tasks.filter((task) => {return task.id !== taskToBeDeleted});
      this.commonService.deleteTask(taskToBeDeleted).subscribe(data => {
    }, error => console.log(error));
  }
  editTask(taskToBeEdited) {
    console.log(taskToBeEdited.id);
    this.router.navigate(['addATask', taskToBeEdited.id]);
  }

}
