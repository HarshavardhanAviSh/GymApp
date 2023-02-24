import { Injectable } from '@angular/core';

import { practice } from '../models/practice.model';
import { gymMemberDetail } from '../models/gym-member-detail.model';
import { GymmemberService } from './gymmember.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  private _ID !: gymMemberDetail ;
  private gymMember !: gymMemberDetail ;

  getEditGymMember() {
    return this.gymMember;  
  }

  public set editGymMember(g:gymMemberDetail) {
    this.gymMember = g;
  }

  


  
}
