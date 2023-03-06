import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '../ui/ui.module';
import { RouterModule, Routes } from '@angular/router';

// import { GymListComponent } from '../gym-onboard/gym-list/gym-list.component';
// import { BankListComponent } from '../gym-onboard/bank-list/bank-list.component'

import { GymAddComponent } from '../gym-onboard/gym-add/gym-add.component';
import { GymListComponent } from '../gym-onboard/gym-list/gym-list.component';


import { BankAddComponent } from './bank-add/bank-add.component';
import { BankListComponent } from '../gym-onboard/bank-list/bank-list.component';
import { GymOnboardPageComponent } from './gym-onboard-page/gym-onboard-page.component';

const routes : Routes = [
 
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
]

@NgModule({
  declarations: [
    GymOnboardPageComponent,
    GymAddComponent,
    GymListComponent,
    BankAddComponent,
    BankListComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes),
    
  ],
  exports:[RouterModule]
})
export class GymOnboardModule { 

  
}
