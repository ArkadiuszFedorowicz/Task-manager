import { Component, Inject } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  task: Task = new Task(1, 'dssd', 'describe', new Date(),'No');
  panelOpenState = false;
  
   constructor( public taskService: TaskService, public dialog: MatDialog) {
     // this.taskService.Tasks.push(new Task(1, 'dssd', 'describe','30/01/2023','No'));
      this.taskService.saveTasksToLocalStorage();
      this.taskService.sortByDatesAscending();
      
  }



  openDialog(item: any): void {
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      data: {item},
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  public removeTask(item: any) {
    console.log(this.taskService.Tasks.filter(task => task === item));
    this.taskService.Tasks = this.taskService.Tasks.filter(task => task !== item);
    console.log(this.taskService.Tasks.filter(task => task !== item))
    console.log(this.taskService.Tasks.filter(task => task === item))
    console.log(item);
    this.taskService.saveTasksToLocalStorage();
  }
  
  




}
