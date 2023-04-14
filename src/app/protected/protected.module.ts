import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateBoardDialogComponent } from './components/create-board-dialog-component/create-board-dialog.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ConfirmModalComponent } from './components/confirm-modal-component/confirm-modal.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MyProfile } from './myprofile/myprofile.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CreateTaskModalComponent } from './components/create-task-modal/create-task-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    CreateBoardDialogComponent,
    ConfirmModalComponent,
    MyProfile,
    CreateTaskModalComponent,
  ],
  imports: [
    CommonModule,
    // Import our Routes for this module
    ProtectedRoutingModule,
    // Angular Material Imports
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    DragDropModule,
  ],
})
export class ProtectedModule {}
