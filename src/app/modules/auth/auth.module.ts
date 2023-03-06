import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { NzAlertModule } from 'ng-zorro-antd/alert';

// import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { UiModule } from '../ui/ui.module';

import { GymOnboardModule } from '../gym-onboard/gym-onboard.module';

const routes : Routes = [
  {
    path:'adminAuth',
    component:AdminAuthComponent
  },
  {
    path:'home',
    component:AdminHomeComponent
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
    // NzCollapseModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    NzAnchorModule,
    NzIconModule,
    NzDropDownModule,
    NzSelectModule,
    NzGridModule,
    NzDatePickerModule,
    NzAlertModule,

    RouterModule.forRoot(routes),
    UiModule,
    GymOnboardModule

  ],
  exports:[]
})
export class AuthModule { }
