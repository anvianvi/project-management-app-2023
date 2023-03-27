import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { backendDomain } from 'src/app/app.module';
import { UserResponse } from 'src/app/public/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUserId() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
    });
    return this.http
      .get<UserResponse>(`${backendDomain}users`, { headers })
      .pipe(
        tap((res: UserResponse) => {
          if (res) {
            console.log('res');
            console.log(res[0]._id);
            localStorage.setItem('user_id', res[0]._id); // store the user ID in local storage
          }
        })
      );
  }
  getBoards() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
    });
    return this.http
      .get(`${backendDomain}boardsSet/${localStorage.getItem('user_id')}`, {
        headers,
      })
      .pipe(
        //@ts-ignore
        tap((res) => {
          if (res) {
            console.log('res');
            console.log(res);
            console.log('res');
            return res;
          }
        })
      );
  }
  createBoard(boardTitle: any): Observable<any> {
    const user_id = localStorage.getItem('user_id');
    const title = boardTitle.title;
    const boardData = {
      title: title,
      owner: user_id,
      users: [user_id],
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
    });
    console.log('Sending request to create board:', boardData);
    return this.http
      .post(`${backendDomain}boards`, boardData, { headers })
      .pipe(
        tap((res) => {
          if (res) {
            console.log('Server response:', res);
          }
        }),
        catchError((err) => {
          console.error('Error creating board:', err);
          return throwError(err);
        })
      );
  }
  //   createBoard(title: string) {
  //     const createBoardRequest = {
  //       title = title
  //     }
  //     return this.http
  //       .post<createBoardRequest>(`${backendDomain}boards`, createBoardRequest)
  //       .pipe(
  //         tap((res: LoginResponse) => {
  //           localStorage.setItem('auth_token', res.token);
  //           this.apiService.getUserId().subscribe(); // call getUserId() function after storing token in local storage
  //         }),
  //         tap(() =>
  //           this.snackbar.open('Login Successfull', 'Close', {
  //             panelClass: 'snackbar',
  //             duration: 2000,
  //             horizontalPosition: 'right',
  //             verticalPosition: 'top',
  //           })
  //         )
  //       );
  //   }
  // }

  // export interface createBoardRequest {
  //   title: string;
  // }
  //     "owner": string, //user id
  //     "users": [
  //       userID: string,
  //     ]
  //   }
}
