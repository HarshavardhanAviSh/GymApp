import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, FormControlDirective } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { gymMemberDetail } from '../models/gym-member-detail.model';
import { GymmemberService } from '../services/gymmember.service';
import { PracticeService } from '../services/practice.service';
import { practice } from './practice.model';



interface Person {
  id: number,
  name : string,
  schname : string,
}


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit{

  constructor(
    private practiceservice:PracticeService,
    private gymmemberservice:GymmemberService
    ) {}

    ngOnInit() {
      this.list();
    }

    listOfMember : Person[] = [
      { 
        id : 1,
        name: 'John Brown',
        schname : 'Brown School'
      },
      {
        id : 2,
        name: 'Jim Green',
        schname: 'Green School'
      },
    ]

    onSubmit() {
      this.editMemberFields.value;
    }

    editMemberFields = new FormGroup({
      name : new FormControl(),
      schname : new FormControl()
    })

    add(data:any) {
      this.practiceservice.add(data);
    }
  

    list() {
      this.practiceservice.list();
    }

    practiceDetail : practice[] = [];
    edit(id:number) {
      this.practiceservice.edit(id)
        .then((res:any) => {
          console.warn("res",res);
          
          this.practiceDetail = res;
          let name = res.name;
          console.warn("name is ",name);
          
        })

    }



    

}
