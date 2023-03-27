import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-board-dialog',
  templateUrl: './create-board-dialog.component.html',
  styleUrls: ['./create-board-dialog.component.sass']
})

export class CreateBoardDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateBoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string }
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onCreateClick(): void {
    this.dialogRef.close(this.data);
  }
}