import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyProfile } from './myprofile/myprofile.component';

// Routes for child Module (protectedModule). Since protected module is lazy loaded in in the
// app-routing.module the full path is `/protected/dashboard`
// const routes: Routes = [
//   {
//     path: 'dashboard',
//     component: DashboardComponent,
//   },
//   {
//     path: '**',
//     redirectTo: 'protected/dashboard',
//     pathMatch: 'full',
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        // children: [
        //   {
        //     path: 'board/',
        //     component: BoardContentComponent,
        //     children: [
        //       { path: 'overview', component: SelectedTaskComponent },
        //       // { path: 'spec', component: ProductSpecComponent },
        //       { path: '', redirectTo: 'overview', pathMatch: 'full' },
        //     ],
        //   },
        // ],
      },
      {
        path: 'profile',
        component: MyProfile,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
