import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, FormControlDirective } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { gymMemberDetail } from '../models/gym-member-detail.model';
import { GymmemberService } from '../services/gymmember.service';
import { PracticeService } from '../services/practice.service';
import { practice } from '../models/practice.model';



interface ItemData {
  id: string;
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  constructor(
    private practiceservice:PracticeService,
    private gymmemberservice:GymmemberService
    ) {}


    editCache : {[key:string]:{edit:boolean;data:practice}}  = {};
    
    listOfData : practice[] = [];
    startEdit(id:string) {
      this.editCache[id].edit = true;

    }

    cancelEdit(id:string):void {
      const index = this.listOfData.findIndex(item => item.id === id);
      this.editCache[id] = {
        data : {...this.listOfData[index]},
        edit : false
      };
    }

    saveEdit(id:string):void {
      const index = this.listOfData.findIndex(item => item.id === id);
      Object.assign(this.listOfData[index],this.editCache[id].data);
      this.editCache[id].edit = false;
    }

    updateEditCache():void {
      this.listOfData.forEach(item => {
        this.editCache[item.id] ={
          edit : false,
          data : {...item}  
        };
      });
    }

    ngOnInit() {
      const data:any = [];

      for(let i=0; i<1 ;i++) {
        data.push({
          id    : `${i}`,
          name  : `Default${i}`,
          schname : `Default School ${i}`

        });
      }

      this.listOfData = data;
      this.updateEditCache();
    }

  }
