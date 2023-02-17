import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthComponent } from './modules/auth/admin-auth/admin-auth.component';
import { AddGymMemberComponent } from './modules/gym-member/add-gym-member/add-gym-member.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/Home/welcome.module').then(m => m.WelcomeModule) },
  
  { path : 'admin-auth',component:AdminAuthComponent},
  { path : 'add-gym-member',component:AddGymMemberComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
