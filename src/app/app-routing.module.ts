import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymAdminAuthComponent } from './authorization/gym-admin-auth/gym-admin-auth.component';
import { GymCustomerAuthComponent } from './authorization/gym-customer-auth/gym-customer-auth.component';
import { PracticeComponent } from './authorization/practice/practice.component';
import { SignupComponent } from './authorization/signup/signup.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/Home/welcome.module').then(m => m.WelcomeModule) },
  
  
  { path: 'admin-auth',component:GymAdminAuthComponent},
  { path: 'gym-customer-auth',component:GymCustomerAuthComponent},
  
  { path: 'practice',component:PracticeComponent},

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
