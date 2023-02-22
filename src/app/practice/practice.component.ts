import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { gymMemberDetail } from '../models/gym-member-detail.model';
import { GymmemberService } from '../services/gymmember.service';




@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {


    
  memberDetail : gymMemberDetail[] = [];

  constructor(
    private gymmemberservice: GymmemberService
  ) {
  }

  ngOnInit() {
    this.list();
  }
  

   add() {
   }


   list() {
     this.gymmemberservice.listGymMember()
     .then((details:any) => {
       console.warn('details',details);
       
       this.memberDetail = details;
       console.warn("MD",this.memberDetail);

      this.edit();
      })
   }


   edit() {
    console.warn("Edit MD",this.memberDetail);
    
   }

   delete() {

   }


    

    
}
