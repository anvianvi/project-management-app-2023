import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { backendDomain } from 'src/app/app.module';
import { UserResponse } from 'src/app/public/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
    });
  }

  getUserId() {
    return this.http
      .get<UserResponse>(`${backendDomain}users`, {
        headers: this.getHeaders(),
      })
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
    return this.http
      .get(`${backendDomain}boardsSet/${localStorage.getItem('user_id')}`, {
        headers: this.getHeaders(),
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

    console.log('Sending request to create board:', boardData);
    return this.http
      .post(`${backendDomain}boards`, boardData, { headers: this.getHeaders() })
      .pipe(
        tap((res) => {
          if (res) {
            console.log('Server response:', res);
          }
        }),
        catchError((err) => {
          console.error('Error getting user ID:', err);
          return throwError(err);
        })
      );
  }

  deleteBoard(boardId: string) {
    return this.http
      .delete(`${backendDomain}boards/${boardId}`, {
        headers: this.getHeaders(),
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
}
