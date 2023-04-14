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
            const login = localStorage.getItem('user_login');
            //@ts-ignore
            const currentUser = res.find((user) => user.login === login);
            localStorage.setItem('user_id', currentUser._id);
            localStorage.setItem('user_name', currentUser.name);
          }
        })
      );
  }

  getCurrentUser() {
    return this.http
      .get(`${backendDomain}users/${localStorage.getItem('user_id')}`, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap((res: any) => {
          if (res) {
            return res;
          }
        })
      );
  }

  updateUserData(
    userName: string,
    userLogin: string,
    userPassword: string
  ): Observable<any> {
    const userId = localStorage.getItem('user_id');
    const userData = {
      name: userName,
      login: userLogin,
      password: userPassword,
    };

    return this.http
      .put(`${backendDomain}users/${userId}`, userData, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap((res) => {
          if (res) {
          }
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  deleteUser(userId: string) {
    return this.http
      .delete(`${backendDomain}users/${userId}`, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap((res: any) => {
          if (res) {
            return res;
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
        tap((res: any) => {
          if (res) {
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

    return this.http
      .post(`${backendDomain}boards`, boardData, { headers: this.getHeaders() })
      .pipe(
        tap((res) => {
          if (res) {
          }
        }),
        catchError((err) => {
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
        tap((res: any) => {
          if (res) {
            return res;
          }
        })
      );
  }

  getColoms(boardId: string) {
    return this.http
      .get(`${backendDomain}boards/${boardId}/columns`, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap((res: any) => {
          if (res) {
            return res;
          }
        })
      );
  }
  createColumn(
    colomnTitle: string,
    boardId: string,
    columnOrder: number
  ): Observable<any> {
    const columnData = {
      title: colomnTitle,
      order: columnOrder,
    };
    return this.http
      .post(`${backendDomain}boards/${boardId}/columns`, columnData, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap((res) => {
          if (res) {
          }
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  updateColumnData(
    boardId: string,
    columnId: string,
    colomnTitle: string,
    columnOrder: number
  ): Observable<any> {
    const columnData = {
      title: colomnTitle,
      order: columnOrder,
    };

    return this.http
      .put(
        `${backendDomain}boards/${boardId}/columns/${columnId}`,
        columnData,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        tap((res) => {
          if (res) {
          }
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  deleteColumn(boardId: string, columnId: string) {
    return this.http
      .delete(`${backendDomain}boards/${boardId}/columns/${columnId}`, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap((res: any) => {
          if (res) {
            return res;
          }
        })
      );
  }

  getTasks(boardId: string, columnId: string) {
    return this.http
      .get(`${backendDomain}boards/${boardId}/columns/${columnId}/tasks`, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap((res: any) => {
          if (res) {
            return res;
          }
        })
      );
  }

  createTask(
    boardId: string,
    columnId: string,
    taskTitle: string,
    taskDescription: string
  ): Observable<any> {
    const userId = localStorage.getItem('user_id');
    const taskData = {
      title: taskTitle,
      order: 0,
      description: taskDescription,
      userId: userId,
      users: [userId],
    };
    return this.http.post(
      `${backendDomain}boards/${boardId}/columns/${columnId}/tasks`,
      taskData,
      {
        headers: this.getHeaders(),
      }
    );
  }

  updateTask(
    boardId: string,
    columnId: string,
    taskId: string,
    taskTitle: string,
    taskDescription: string,
    taskOder: number
  ): Observable<any> {
    const userId = localStorage.getItem('user_id');
    const taskData = {
      title: taskTitle,
      order: taskOder,
      description: taskDescription,
      userId: userId,
      users: [userId],
    };
    console.log('im updating')

    console.log(taskData);
    return this.http.put(
      `${backendDomain}boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      taskData,
      {
        headers: this.getHeaders(),
      }
    );
  }

  deleteTask(boardId: string, columnId: string, taskId: string) {
    return this.http
      .delete(
        `${backendDomain}boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        tap((res: any) => {
          if (res) {
            return res;
          }
        })
      );
  }
}
