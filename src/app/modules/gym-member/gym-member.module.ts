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
import { AddGymMemberComponent } from './add-gym-member/add-gym-member.component';
import { ListGymMemberComponent } from './list-gym-member/list-gym-member.component';
import {  Routes } from '@angular/router';
import { GymMemberHomeComponent } from './gym-member-home/gym-member-home.component';


const routes : Routes = [
  {
    path:'add-member',
    component:AddGymMemberComponent
  },
  {
    path:'list-member',
    component:ListGymMemberComponent
  }
]

@NgModule({
  declarations: [
    AddGymMemberComponent,
    ListGymMemberComponent,
    GymMemberHomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    NzCollapseModule,
    NzAnchorModule,
    NzDropDownModule,
    NzSelectModule,
    NzGridModule,
    NzDatePickerModule,
  ]
})
export class GymMemberModule { }