import { Injectable } from '@angular/core';

import {practice} from '../models/practice.model';
import { gymMemberDetail } from '../models/gym-member-detail.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  private _id !: gymMemberDetail ;

  public get id():gymMemberDetail {
    return this._id
  }

  public set id(i: gymMemberDetail) {
  this._id = i;
  }

}
