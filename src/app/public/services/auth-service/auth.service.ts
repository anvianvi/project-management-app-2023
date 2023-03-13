import { LOCALSTORAGE_TOKEN_KEY } from './../../../app.module';
import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  ɵsetAllowDuplicateNgModuleIdsForTest,
} from '@angular/core';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  // LoginRequest,
  // LoginResponse,
  // RegisterRequest,
  RegisterResponse,
} from '../../interfaces';
import { FormGroup } from '@angular/forms';

const backendDomain = `https://final-task-backend-production-25f3.up.railway.app/`;
// export const fakeLoginResponse: LoginResponse = {
//   // fakeAccessToken.....should all come from real backend
//   accessToken:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
//   refreshToken: {
//     id: 1,
//     userId: 2,
//     token: 'fakeRefreshToken...should al come from real backend',
//     refreshCount: 2,
//     expiryDate: new Date(),
//   },
//   tokenType: 'JWT',
// };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private jwtService: JwtHelperService
  ) {}


  // login(loginRequest: LoginRequest): Observable<LoginResponse> {
  //   // return of(fakeLoginResponse).pipe(
  //   //   tap((res: LoginResponse) =>
  //   //     localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken)
  //   //   ),
  //   //   tap(() =>
  //   //     this.snackbar.open('Login Successfull', 'Close', {
  //   //       duration: 2000,
  //   //       horizontalPosition: 'right',
  //   //       verticalPosition: 'top',
  //   //     })
  //   //   )
  //   // );
  //   return this.http.post<LoginResponse>('/api/auth/login', loginRequest).pipe(
  //     tap((res: LoginResponse) =>
  //       localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken)
  //     ),
  //     tap(() =>
  //       this.snackbar.open('Login Successfull', 'Close', {
  //         duration: 2000,
  //         horizontalPosition: 'right',
  //         verticalPosition: 'top',
  //       })
  //     )
  //   );
  // }

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
            this.snackbar.open(`User created successfully`, 'Close', {
              panelClass: 'snackbar',
              duration: 2000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });
          }
        })
      );
  }


  // getLoggedInUser() {
  //   const decodedToken = this.jwtService.decodeToken();
  //   return decodedToken.user;
  // }
}
