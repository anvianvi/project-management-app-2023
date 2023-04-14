import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../public/api';
import { MatDialog } from '@angular/material/dialog';
import { CreateBoardDialogComponent } from '../components/create-board-dialog-component/create-board-dialog.component';
import { ConfirmModalComponent } from '../components/confirm-modal-component/confirm-modal.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { IColumn, ITask } from 'src/app/public/interfaces';
import { CreateTaskModalComponent } from '../components/create-task-modal/create-task-modal.component';

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
    this.cdRef.detectChanges();
  }

  getBoards(): void {
    this.apiService.getBoards().subscribe((data) => {
      this.boards = data;
    });
  }

  selectBoard(boardId: string) {
    this.selectedBoardId = boardId;
    this.getBoardColumns(boardId);
    // this.getColumnsTasks()
  }

  createBoard(): void {
    const dialogRef = this.dialog.open(CreateBoardDialogComponent, {
      width: '400px',
      data: { title: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.createBoard(result).subscribe(() => {
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
        // this.columns = this.columns.sort((a, b) => a.order - b.order);
      });
  }

  createTask(column: IColumn): void {
    const dialogRef = this.dialog.open(CreateTaskModalComponent, {
      data: {
        title: 'Create a new task',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService
          .createTask(
            this.selectedBoardId,
            column._id,
            result.title,
            result.description
          )
          .subscribe(() => {
            this.getColumnsTasks(column);
          });
      }
    });
  }

  editTask(task: ITask, column: IColumn) {
    const dialogRef = this.dialog.open(CreateTaskModalComponent, {
      data: {
        task,
        heading: 'Edit Task',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService
          .updateTask(
            this.selectedBoardId,
            column._id,
            task._id,
            result.title,
            result.description,
            task.order
          )
          .subscribe(() => {
            this.getColumnsTasks(column);
          });
      }
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

  onTaskDrop(event: CdkDragDrop<any>, column: any) {
    if (event.previousContainer === event.container) {
      // The task was dropped within the same column. Update the order.
      moveItemInArray(column.tasks, event.previousIndex, event.currentIndex);
      column.tasks.forEach((task: ITask, index: number) => {
        task.order = index + 1;
        this.apiService
          .updateTask(
            this.selectedBoardId,
            column._id,
            task._id,
            task.title,
            task.description,
            task.order
          )
          .subscribe();
      });
    } else {
      // The task was dropped into a different column. Remove it from the previous column's tasks list and add it to the new column's tasks list.
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      event.container.data.forEach((task: ITask, index: number) => {
        task.order = index + 1;
        this.apiService
          .updateTask(
            this.selectedBoardId,
            event.container.id,
            task._id,
            task.title,
            task.description,
            task.order
          )
          .subscribe();
      });
      event.previousContainer.data.forEach((task: ITask, index: number) => {
        task.order = index + 1;
        this.apiService
          .updateTask(
            this.selectedBoardId,
            event.previousContainer.id,
            task._id,
            task.title,
            task.description,
            task.order
          )
          .subscribe();
      });
    }
  }
}
