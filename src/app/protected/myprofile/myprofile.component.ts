import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../public/api';
import { User } from 'src/app/public/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmModalComponent } from '../components/confirm-modal-component/confirm-modal.component';

@Component({
  selector: 'my-profile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.sass'],
})
export class MyProfile implements OnInit {
  user: User = {
    name: '',
    login: '',
    _id: '',
  }; // Initialize with default value
  isDisabled = true;
  newPassword: string = '';
  confirmPassword: string = '';
  changePasswordResult: string | undefined;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.refreshUserInfo();
  }

  refreshUserInfo(): void {
    this.apiService.getCurrentUser().subscribe((data: any) => {
      this.user = data;
      console.log('current user:', this.user);
      console.log(this.user.name);
    });
  }

  onEditClick() {
    this.isDisabled = false;
  }

  onSaveClick() {
    // Here you would typically call a service to save the changes to the server
    // For simplicity, we'll just log the changes to the console
    console.log(
      //@ts-ignore
      `Saving changes: name=${this.user.name}, login=${this.user.login}`
    );
    this.isDisabled = true;
  }

  onChangePasswordClick() {
    if (this.newPassword === this.confirmPassword) {
      console.log('New password: ', this.newPassword);
      this.changePasswordResult = 'Password changed successfully';
    } else {
      console.log('Passwords do not match');
      this.changePasswordResult = 'Passwords do not match';
    }
  }

  onDeleteClick() {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {
        message: `Are you sure you want to delete curren account?`,
      },
    });
    const userID = localStorage.getItem('user_id') || '';
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.deleteUser(userID).subscribe(() => {
          console.log('User deleted');
          localStorage.clear();
          this.router.navigate(['../../']);
          // this.deleteUser();
        });
      }
    });
  }
}
