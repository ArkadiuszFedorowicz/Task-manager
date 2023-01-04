import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from '../models/task';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-generator',
  templateUrl: './task-generator.component.html',
  styleUrls: ['./task-generator.component.scss']
})
export class TaskGeneratorComponent{


  public constructor( public taskService: TaskService, ) {

  }

  public isInProgress: string = 'No';
  public id: number = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;

  public formData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      describe: new FormControl('',[Validators.required]),
      deadline: new FormControl('', [Validators.required]),
      inProgress: new FormControl('', [Validators.required]),
 
  });
 

public newTask() {
  this.id = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
  this.addNewTask(this.id, this.formData.value.name, this.formData.value.describe,this.formData.value.deadline , this.formData.value.inProgress);
}

public addNewTask(id: any, name: any, describe: any, deadline:any, inProgress: any)
{
 // deadline = deadline.slice(0, 6);
  this.taskService.Tasks.push(new Task(id, name, describe, deadline, inProgress));
  this.taskService.saveTasksToLocalStorage();
  this.taskService.sortByDatesAscending();
  console.log(this.taskService.Tasks);
  this.formData.reset();
  //const objects = JSON.parse(localStorage.getItem('objects'));
 // console.log(JSON.parse(localStorage.getItem('tasks')));
}

}
