import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CustomValidators } from '../../custom-validator';
import { AuthService } from '../../services/auth-service/auth.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../home/home.component.sass', './register.component.sass'],
})
export class RegisterComponent {
  registerForm = new FormGroup(
    {
      name: new FormControl(null, [Validators.required]),
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required]),
    },
    // TODO add custom Validators to the form
    { validators: CustomValidators.passwordsMatching }
  );

  constructor(private router: Router, private authService: AuthService) {}

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.authService;
    this.authService
      .register(this.registerForm)
      .pipe(tap(() => this.router.navigate(['../login'])))
      .subscribe();
  }
}
