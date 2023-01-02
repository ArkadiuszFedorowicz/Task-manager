import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.scss']
})
export class DeleteTaskDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  public ngOnInit()
  {
    console.log("start" + this.data);
  }
}
