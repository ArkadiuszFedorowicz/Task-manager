import { Injectable } from '@angular/core';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
 public Tasks: Task[] = JSON.parse(localStorage.getItem('tasks')  || '{}');
 public taskToReplace: Task | undefined;

  constructor() { }

  public saveTasksToLocalStorage() {
   localStorage.setItem('tasks', JSON.stringify(this.Tasks));
   const taskLocal = JSON.parse(localStorage.getItem('tasks')  || '{}');
    this.Tasks = taskLocal;
    console.log(localStorage.getItem('tasks'))
  }

  public sortByDatesAscending() {
    return this.Tasks.sort((a: any, b: any) => {
      return <any>new Date(a.deadline) - <any>new Date(b.deadline);
    });
  }

  
}
