import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.sass'],
})
export class CreateTaskModalComponent implements OnInit {
  title: string = '';
  description: string = '';

  constructor(private dialogRef: MatDialogRef<CreateTaskModalComponent>) {}

  ngOnInit(): void {}

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
