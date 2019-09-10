import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';


const routes: Routes = [
  {path: 'addATask', component: AddTaskComponent},
  {path: 'viewTasks', component: ViewTaskComponent},
  {path: 'addATask/:id' , component: AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
