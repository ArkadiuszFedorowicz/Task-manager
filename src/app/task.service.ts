import { Injectable } from '@angular/core';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
 public Tasks: Task[] = JSON.parse(localStorage.getItem('tasks')  || '{}');

  constructor() { }

  public saveTasksToLocalStorage() {
   localStorage.setItem('tasks', JSON.stringify(this.Tasks));
   const taskLocal = JSON.parse(localStorage.getItem('tasks')  || '{}');
    this.Tasks = taskLocal;
    console.log(localStorage.getItem('tasks'))
  }
  
}
