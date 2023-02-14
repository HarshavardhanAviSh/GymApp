import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymCustomerAuthComponent } from './authorization/gym-customer-auth/gym-customer-auth.component';
import { PracticeComponent } from './authorization/practice/practice.component';
import { SignupComponent } from './authorization/signup/signup.component';
import { SuperAdminComponent } from './dashboards/super-admin/super-admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/Home/welcome.module').then(m => m.WelcomeModule) },
  { path:'auth',component:SuperAdminComponent },
  { path: 'gym-member-signup',component:SignupComponent},
  { path: 'practice',component:PracticeComponent},
  { path: 'gym-customer-auth',component:GymCustomerAuthComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
