import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  sub: any;
  id: string;
  taskName: string;
  parentTask: string;
  priorityFrom: number;
  priorityTo: number;
  startDate: any;
  endDate: any;
  taskToBeEdited: any
  constructor(private commonService: CommonService, private router: Router, private route: ActivatedRoute
              , private datepipe: DatePipe) { }
  newTask: any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      // console.log(this.id);
      if(this.id) {
          this.commonService.getATask(this.id).subscribe(data => 
            { 
                this.taskToBeEdited = data; 
                this.taskName = this.taskToBeEdited.taskName;
                this.parentTask = this.taskToBeEdited.parentTask;
                this.priorityFrom = this.taskToBeEdited.priorityFrom;
                this.priorityTo = this.taskToBeEdited.priorityTo;
                this.startDate = this.datepipe.transform(this.taskToBeEdited.startDate, 'yyyy-MM-dd');
                this.endDate = this.datepipe.transform(this.taskToBeEdited.endDate, 'yyyy-MM-dd');
            }, error => console.log(error));
      }
  });
  }
  createTask(taskCreation) {
      this.newTask = taskCreation;
      if(!this.id) {
          this.commonService.saveTask(this.newTask).subscribe(data => {
              this.router.navigateByUrl('/viewTasks');
              alert('Successfully Inserted');
              // console.log(data);
          }, error => console.log(error));
      } else {
        // console.log(this.id); 
          this.commonService.editTask(this.newTask, this.id).subscribe(data => {
              this.router.navigateByUrl('/viewTasks');
              alert('Successfully Edited');
          }, error => console.log(error));
      }
  }
  dateResolve(dateToBeResolved): Date {
      const date = new Date(dateToBeResolved);
      return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }
}
