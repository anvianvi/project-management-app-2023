import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITask } from 'src/app/public/interfaces';

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.sass'],
})
export class CreateTaskModalComponent implements OnInit {
  title: string = '';
  description: string = '';
  constructor(
    private dialogRef: MatDialogRef<CreateTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; task?: ITask }
  ) {}

  ngOnInit(): void {
    this.title = this.data.task?.title || '';
    this.description = this.data.task?.description || '';
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onCreateTask(): void {
    this.dialogRef.close({
      title: this.title,
      description: this.description,
    });
  }
}
