import { Component } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { Task } from '../models/task';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-generator',
  templateUrl: './task-generator.component.html',
  styleUrls: ['./task-generator.component.scss']
})
export class TaskGeneratorComponent{


  public constructor( public taskService: TaskService) {

  }

  public isInProgress: string = 'No';
  public id: number = 1;

  public formData = new FormGroup({
      name: new FormControl(''),
      describe: new FormControl(''),
      inProgress: new FormControl(''),

  });
 


public newTask() {
  this.id++;
  this.addNewTask(this.id, this.formData.value.name, this.formData.value.describe, this.formData.value.inProgress);
}

public addNewTask(id: any, name: any, describe: any, inProgress: any)
{
  this.taskService.Tasks.push(new Task(id, name, describe, inProgress));
  console.log(this.taskService.Tasks);
}

}
