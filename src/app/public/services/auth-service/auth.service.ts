import { backendDomain } from './../../../app.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';
import {
  LoginRequest,
  LoginResponse,
  RegisterResponse,
} from '../../interfaces';
import { ApiService } from '../../api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private jwtService: JwtHelperService,
    private apiService: ApiService
  ) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${backendDomain}auth/signin`, loginRequest)
      .pipe(
        catchError((error) => {
          let errorMessage = 'Unknown error occurred';
          if (error.status === 400) {
            errorMessage = error.error.message;
          } else if (error.status === 401) {
            errorMessage = error.error.message;
          }
          this.snackbar.open(errorMessage, 'Close', {
            panelClass: 'snackbar',
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          return of(null as unknown as LoginResponse);
        }),
        tap((res: LoginResponse) => {
          localStorage.setItem('auth_token', res.token);
          this.apiService.getUserId().subscribe(); // call getUserId() function after storing token in local storage
        }),
        tap(() =>
          this.snackbar.open('Login Successfull', 'Close', {
            panelClass: 'snackbar',
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          })
        )
      );
  }

  register(registerForm: FormGroup): Observable<RegisterResponse> {
    const registerRequest = {
      name: registerForm.get('name')?.value,
      login: registerForm.get('login')?.value,
      password: registerForm.get('password')?.value,
    };
    return this.http
      .post<RegisterResponse>(`${backendDomain}auth/signup`, registerRequest)
      .pipe(
        catchError((error) => {
          let errorMessage = 'Unknown error occurred';
          if (error.status === 400) {
            errorMessage = error.error.message;
          } else if (error.status === 409) {
            errorMessage = 'Login already exists';
          }
          this.snackbar.open(errorMessage, 'Close', {
            panelClass: 'snackbar',
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          return of(null as unknown as RegisterResponse);
        }),
        tap((res: RegisterResponse) => {
          if (res) {
            this.snackbar.open(
              `User created successfully. Please proceed to the login screen to access the system.`,
              'Close',
              {
                panelClass: 'snackbar',
                duration: 2000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
              }
            );
          }
        })
      );
  }

  // getLoggedInUser() {
  //   const decodedToken = this.jwtService.decodeToken();
  //   return decodedToken.user;
  // }
}
