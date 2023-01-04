import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog,  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/dialog-data';
import { Task } from '../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss']
})
export class EditTaskDialogComponent {

 public taskToEdit: Task = new Task(1, 'dssd', 'describe', new Date() ,'No');

  constructor(
    public taskService: TaskService,
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  public isInProgress: any = this.data.item.inProgress;
  public id: number = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;;


  public formData = new FormGroup({
    name: new FormControl(this.data.item.name),
    describe: new FormControl(this.data.item.describe),
    deadline: new FormControl(this.data.item.deadline), 
    inProgress: new FormControl(this.data.item.inProgress),

});

//TODO zamiana nowego taska z starym
  public saveTask(): void {
    console.log('save task');
    console.log(this.data.item.name);
    console.log(this.formData.value);
    this.taskService.taskToReplace = new Task(this.data.item.id, this.formData.value.name, this.formData.value.describe, this.formData.value.deadline, this.formData.value.inProgress);
    let index =  this.taskService.Tasks.findIndex(obj => obj.id === this.taskService.taskToReplace?.id);
    if (index !== -1) {
      this.taskService.Tasks.splice(index, 1, this.taskService.taskToReplace);
    }
    console.log(index);
    console.log(this.taskService.taskToReplace);

  }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data);
  }

  public ngOnInit(): void {

    this.taskToEdit = this.data;
    console.log(this.taskToEdit);
  }

}
