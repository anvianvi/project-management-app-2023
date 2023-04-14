import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../public/api';
import { MatDialog } from '@angular/material/dialog';
import { CreateBoardDialogComponent } from '../components/create-board-dialog-component/create-board-dialog.component';
import { ConfirmModalComponent } from '../components/confirm-modal-component/confirm-modal.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  boards: any[] = [];
  columns: any[] = [];
  selectedBoardId: string = '';
  newColumnTitle: string = '';

  constructor(private apiService: ApiService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.getBoards();
  }

  getBoards(): void {
    this.apiService.getBoards().subscribe((data) => {
      this.boards = data;
    });
  }

  selectBoard(boardId: string) {
    this.selectedBoardId = boardId;
    this.getBoardColumns(boardId);
  }

  createBoard(): void {
    const dialogRef = this.dialog.open(CreateBoardDialogComponent, {
      width: '300px',
      data: { title: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log('Result:', result.title);
      if (result) {
        this.apiService.createBoard(result).subscribe((board: any) => {
          console.log('Board created:', board);
          this.getBoards();
        });
      }
    });
  }
  deleteBoard(boardId: string, boardTitle: string): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {
        message: `Are you sure you want to delete the board "${boardTitle}"?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.deleteBoard(boardId).subscribe(() => {
          console.log('Board deleted');
          this.getBoards();
        });
      }
    });
  }

  getBoardColumns(boardId: string) {
    this.apiService.getColoms(boardId).subscribe((data) => {
      this.columns = data;
      console.log('Boards:', this.boards);
      console.log(this.columns.length);
    });
  }

  createColumn(): void {
    if (!this.newColumnTitle) return;
    this.apiService
      .createColumn(
        this.newColumnTitle,
        this.selectedBoardId,
        this.columns.length
      )
      .subscribe((data: any) => {
        this.columns.push(data);
        this.newColumnTitle = '';
      });
  }

  startEditingColumnTitle(column: any) {
    column.isEditing = true;
    column.newTitle = column.title;
  }

  cancelEditingColumnTitle(column: any) {
    column.isEditing = false;
  }

  updateColumnTitle(column: any) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {
        message: `Save changes?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService
          .updateColumnData(
            this.selectedBoardId,
            column._id,
            column.newTitle,
            column.order
          )
          .subscribe(() => {
            this.getBoardColumns(this.selectedBoardId);
          });
      }
    });
    column.isEditing = false;
  }

  deleteColumn(columnId: string, columnTitle: string): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {
        message: `Are you sure you want to delete the column "${columnTitle}"?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService
          .deleteColumn(this.selectedBoardId, columnId)
          .subscribe(() => {
            console.log('column deleted');
            this.getBoardColumns(this.selectedBoardId);
          });
      }
    });
  }

  //@ts-ignore
  onColumbDrop(event: CdkDragDrop<any>) {
    const droppedColumnIndex = event.previousIndex;
    const droppedColumn = this.columns[droppedColumnIndex];
    console.log(this.columns);
    console.log(event);
    console.log(this.columns);
    console.log(event.previousIndex);
    console.log(event.currentIndex);
    console.log(droppedColumn);
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    // Update the order of the columns in the database
    // ...
    // this.apiService
    //       .updateColumnData(
    //         this.selectedBoardId,
    //         column._id,
    //         column.title,
    //         column.order
    //       )
    //       .subscribe(() => {
    //         this.getBoardColumns(this.selectedBoardId);
    //       });
  }
}
