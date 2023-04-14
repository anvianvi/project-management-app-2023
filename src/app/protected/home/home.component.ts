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
      console.log('Boards:', this.boards);
    });
  }

  selectBoard(boardId: string) {
    console.log('is im select any board?');
    console.log(boardId);
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
        console.log('i send this data');
        console.log(this.newColumnTitle);
        console.log(this.selectedBoardId);

        this.columns.push(data);
        this.newColumnTitle = '';
      });
  }
  //@ts-ignore
  onColumbDrop(event: CdkDragDrop<Column[]>) {
    console.log(this.columns);
    console.log(event.previousIndex);
    console.log(event.currentIndex);

    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    // Update the order of the columns in the database
    // ...
  }
}
