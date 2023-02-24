import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GymmemberService } from '../../../services/gymmember.service';
import { gymMemberDetail } from 'src/app/models/gym-member-detail.model';
import { test } from 'src/app/models/test.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-gym-member',
  templateUrl: './update-gym-member.component.html',
  styleUrls: ['./update-gym-member.component.css']
})
export class UpdateGymMemberComponent  implements OnInit{

  // showMessage: string = '';

  // memberProfile: gymMemberDetail[] = [];
  // memberDetail: undefined | gymMemberDetail;

  editMemberDetailsForm !: FormGroup ;

  constructor(
    private gymmemberservice: GymmemberService,
    private aroute: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder
  ) { }
  


  ngOnInit(): void {
    this.editMemberDetailsForm = this.fb.group({
      fname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      lname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      uid: new FormControl(''),

      membership : new FormControl('',[Validators.required]),
      contactno: new FormControl('', [Validators.required, Validators.pattern('[0-9]+$')]),
      email: new FormControl('', [Validators.email, Validators.required]),

      dob: new FormControl(),
      gender: new FormControl(),

      address1: new FormControl('', Validators.required),
      address2: new FormControl(),
      nationality: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      landmark: new FormControl(),
      city: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      state: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+$')]),
      pincode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      location: new FormControl()
    })
  }

  submit() {
    this.editMemberDetailsForm.value;
  }
  
  date = null;
  onChange(result:Date) {
    // console.warn(result);
    
  }

  reset() {
    return this.editMemberDetailsForm.reset();
  }

  onEditMember() {
    
  }

}


