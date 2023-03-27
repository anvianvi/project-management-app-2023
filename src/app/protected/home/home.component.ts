import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../public/api';
import { MatDialog } from '@angular/material/dialog';
import { CreateBoardDialogComponent } from '../components/create-board-dialog-component/create-board-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  boards: any;

  constructor(private apiService: ApiService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.refreshBoards();

    // console.log(localStorage);
    // this.apiService.getBoards().subscribe((data) => {
    //   this.boards = data;
    //   console.log(this.boards);
    // });
  }
  refreshBoards(): void {
    this.apiService.getBoards().subscribe((data) => {
      this.boards = data;
      console.log('Boards:', this.boards);
    });
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
          this.refreshBoards(); // <-- Refresh the board list
        });
      }
    });

    // deleteBoard(boardId: number): void {
    //   console.log('Deleting board with id', boardId);
    //   this.apiService.deleteBoard(boardId).subscribe(() => {
    //     console.log('Board deleted');
    //   });
    // }
  }
}
