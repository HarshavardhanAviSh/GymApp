import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { UiModule } from '../modules/ui/ui.module';
import { ChartsModule } from '../charts/charts.module';
import { RouterModule, Routes } from '@angular/router';



const routes:Routes = [
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  } 
]



@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    ChartsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardsModule { }
