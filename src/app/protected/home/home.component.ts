import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../public/api';
import { MatDialog } from '@angular/material/dialog';
import { CreateBoardDialogComponent } from '../components/create-board-dialog-component/create-board-dialog.component';
import { ConfirmModalComponent } from '../components/confirm-modal-component/confirm-modal.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { IColumn, ITask } from 'src/app/public/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  boards: any[] = [];
  columns: any[] = [];
  tasks: any[] = [];
  selectedBoardId: string = '';
  newColumnTitle: string = '';

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getBoards();
    this.apiService.getBoards();
    console.log(this.boards);
    console.log('loaded');
    this.cdRef.detectChanges();
  }

  getBoards(): void {
    this.apiService.getBoards().subscribe((data) => {
      this.boards = data;
      console.log('loaded in get berds');
    });
  }

  selectBoard(boardId: string) {
    this.selectedBoardId = boardId;
    this.getBoardColumns(boardId);
    // this.getColumnsTasks()
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
          this.getBoards();
        });
      }
    });
  }

  getBoardColumns(boardId: string) {
    this.apiService.getColoms(boardId).subscribe((data) => {
      this.columns = data;
      this.columns = this.columns.sort((a, b) => a.order - b.order);

      this.columns = this.columns.map((column) => {
        column.tasks = [];
        this.getColumnsTasks(column);
        return column;
      });
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
        const indexToDelete = this.columns.findIndex(
          (col) => col._id === columnId
        );
        if (indexToDelete === -1) return;
        this.apiService
          .deleteColumn(this.selectedBoardId, columnId)
          .subscribe(() => {
            console.log('column deleted');
            this.columns.splice(indexToDelete, 1);
            this.columns.forEach((col, index) => {
              col.order = index + 1;
              this.apiService.updateColumnData(
                col.boardId,
                col._id,
                col.title,
                col.order
              );
            });
          });
      }
    });
  }

  onColumbDrop(event: CdkDragDrop<any>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);

    this.columns.forEach((column, index) => {
      column.order = index + 1;
      this.apiService.updateColumnData(
        column.boardId,
        column._id,
        column.title,
        column.order
      );
    });
  }

  getColumnsTasks(column: any) {
    this.apiService
      .getTasks(this.selectedBoardId, column._id)
      .subscribe((tasks) => {
        column.tasks = tasks;
        console.log('fetched tasks', this.tasks);
        // this.columns = this.columns.sort((a, b) => a.order - b.order);
      });
  }

  createTask(column: any) {
    console.log('123');
    console.log(column);

    const taskTitle = 'New Task';
    const taskDescription = 'taskDescription';

    this.apiService
      .createTask(this.selectedBoardId, column._id, taskTitle, taskDescription)
      .subscribe((task: any) => {
        column.tasks.push(task);
      });
  }

  deleteTask(task: ITask, column: IColumn) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {
        message: `Are you sure you want to delete the task "${task.title}"?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService
          .deleteTask(this.selectedBoardId, column._id, task._id)
          .subscribe(() => {
            this.getColumnsTasks(column);
          });
      }
    });
  }
}
