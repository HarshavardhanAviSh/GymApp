import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthComponent } from './modules/auth/admin-auth/admin-auth.component';
import { AdminHomeComponent } from './modules/auth/admin-home/admin-home.component';
import { AddGymMemberComponent } from './modules/gym-member/add-gym-member/add-gym-member.component';
import { ListGymMemberComponent } from './modules/gym-member/list-gym-member/list-gym-member.component';
import { UpdateGymMemberComponent } from './modules/gym-member/update-gym-member/update-gym-member.component';
import { PracticeComponent } from './practice/practice.component';



import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { GymOnboardModule } from './modules/gym-onboard/gym-onboard.module';
// import { BankListComponent } from './modules/gym-onboard/bank-list/bank-list.component';
// import { GymListComponent } from './modules/gym-onboard/gym-list/gym-list.component';

import { GymAddComponent } from './modules/gym-onboard/gym-add/gym-add.component';
import { GymListComponent } from './modules/gym-onboard/gym-list/gym-list.component';

import { BankAddComponent } from './modules/gym-onboard/bank-add/bank-add.component';
import { BankListComponent } from './modules/gym-onboard/bank-list/bank-list.component';
import { GymOnboardPageComponent } from './modules/gym-onboard/gym-onboard-page/gym-onboard-page.component';

// import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/Home/welcome.module').then(m => m.WelcomeModule) },
  { path: 'admin-auth', component: AdminAuthComponent },
  { path: 'add-gym-member', component: AddGymMemberComponent },
  { path: 'list-gym-member', component: ListGymMemberComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'gym-admin-home', component: AdminHomeComponent },
  { path: 'update-gym-member', component: UpdateGymMemberComponent },

  {
    path: 'admin', loadChildren: () => import('./modules/auth/auth.module')
      .then((m) => m.AuthModule)
  },
  {
    path: 'member', loadChildren: () => import('./modules/gym-member/gym-member.module')
      .then((m) => m.GymMemberModule)
  },
  {
    path: 'onboard',loadChildren : () => import('../app/modules/gym-onboard/gym-onboard.module')
      .then((m) => m.GymOnboardModule)
  },
  {
    path: 'dashboards',loadChildren : () => import('../app/dashboards/dashboards.module')
    .then((m) => m.DashboardsModule)
  },

  {
    path: 'admin-auth',
    component: AdminAuthComponent
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent
  },
  {
    path:'bank-list',
    component:BankListComponent
  },
  {
    path:'gym-list',
    component:GymListComponent
  },
  {
    path:'onboard-page',
    component:GymOnboardPageComponent
  },
  {
    path:'gym-add',
    component:GymAddComponent
  },
  {
    path:'gym-list',
    component:GymListComponent
  },
  {
    path:'bank-add',
    component:BankAddComponent
  },
  {
    path:'bank-list',
    component:BankListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
