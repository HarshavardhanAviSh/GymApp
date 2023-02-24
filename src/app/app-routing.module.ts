import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthComponent } from './modules/auth/admin-auth/admin-auth.component';
import { AdminHomeComponent } from './modules/auth/admin-home/admin-home.component';
import { AddGymMemberComponent } from './modules/gym-member/add-gym-member/add-gym-member.component';
import { ListGymMemberComponent } from './modules/gym-member/list-gym-member/list-gym-member.component';
import { UpdateGymMemberComponent } from './modules/gym-member/update-gym-member/update-gym-member.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/Home/welcome.module').then(m => m.WelcomeModule) },
  
  { path : 'admin-auth',component:AdminAuthComponent},
  { path : 'add-gym-member',component:AddGymMemberComponent},
  { path : 'list-gym-member',component:ListGymMemberComponent},
  
  { path : 'practice',component:PracticeComponent},
  { path : 'gym-admin-home',component:AdminHomeComponent},

  { path : 'update-gym-member',component:UpdateGymMemberComponent},
  // { path : 'update-gym-member/:id',component:UpdateGymMemberComponent}



  // {
  //   path:'admin', loadChildren:() => import ('./modules/auth/auth.module')
  //   .then((m) => m.AuthModule)
  // },
  // {
  //   path:'member', loadChildren:() => import ('./modules/gym-member/gym-member.module')
  //   .then((m) => m.GymMemberModule)
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
