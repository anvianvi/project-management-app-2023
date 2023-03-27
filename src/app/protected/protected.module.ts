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
@NgModule({
  declarations: [DashboardComponent, HomeComponent, CreateBoardDialogComponent],
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
  ],
})
export class ProtectedModule {}
