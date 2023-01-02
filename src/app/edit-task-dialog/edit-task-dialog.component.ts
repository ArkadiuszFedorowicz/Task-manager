import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog,  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/dialog-data';
import { Task } from '../models/task';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss']
})
export class EditTaskDialogComponent {

 public taskToEdit: Task = new Task(1, 'dssd', 'describe', '30/01/2022','No');

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  public isInProgress: any = this.data.item.inProgress;
  public id: number = 1;


  public formData = new FormGroup({
    name: new FormControl(this.data.item.name),
    describe: new FormControl(this.data.item.describe),
    inProgress: new FormControl('Yes'),

});


  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data);
  }

}
