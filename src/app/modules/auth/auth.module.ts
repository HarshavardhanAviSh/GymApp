import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';


const routes : Routes = [
  {
    path:'admin-auth',
    component:AdminAuthComponent
  } 
]

@NgModule({
  declarations: [
    AdminAuthComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzCollapseModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    NzAnchorModule,
    NzIconModule,
    NzDropDownModule,
    NzSelectModule,
    NzGridModule,
    NzDatePickerModule,
  ]
})
export class AuthModule { }
