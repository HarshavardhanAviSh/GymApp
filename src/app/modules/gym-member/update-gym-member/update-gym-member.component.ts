import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GymmemberService } from '../../../services/gymmember.service';
import { gymMemberDetail } from 'src/app/models/gym-member-detail.model';
import { test } from 'src/app/models/test.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-update-gym-member',
  templateUrl: './update-gym-member.component.html',
  styleUrls: ['./update-gym-member.component.css']
})
export class UpdateGymMemberComponent implements OnInit {

  editMemberDetailsForm !: FormGroup;

  // myGymMember: any;
  myGymMember !: gymMemberDetail;

  constructor(
    private gymmemberservice: GymmemberService,
    private aroute: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder,
    private stateSvc: StateService
  ) { }

  ngOnInit(): void {
    // this.meraGymMember ;= this.stateSvc.getEditGymMember()

    this.myGymMember = this.stateSvc.getEditGymMember();
    console.log(this.myGymMember, 'From child componentttttt')

    this.editMemberDetailsForm = this.fb.group({
      fname: new FormControl(this.myGymMember.fname, [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      lname: new FormControl(this.myGymMember.lname, [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      uid: new FormControl(this.myGymMember.uid),
      membership: new FormControl(this.myGymMember.membership, [Validators.required]),
      contactno: new FormControl(this.myGymMember.contactno, [Validators.required, Validators.pattern('[0-9]+$')]),
      email: new FormControl(this.myGymMember.email, [Validators.email, Validators.required]),
      dob: new FormControl(this.myGymMember.dob,Validators.required),
      gender: new FormControl(this.myGymMember.gender),
      
      address1: new FormControl(this.myGymMember.address1, Validators.required),
      address2: new FormControl(this.myGymMember.address2),
      nationality: new FormControl(this.myGymMember.nationality, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      landmark: new FormControl(this.myGymMember.landmark),
      city: new FormControl(this.myGymMember.city, [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      state: new FormControl(this.myGymMember.state, [Validators.required, Validators.pattern('[A-Za-z]+$')]),
      pincode: new FormControl(this.myGymMember.pincode, [Validators.required, Validators.pattern('^[0-9]+$')]),
      location: new FormControl(this.myGymMember.location)
    })

    // let memberId =  this.aroute.snapshot.paramMap.get('id');
    // console.warn(memberId);
  }

  submit() {
    this.editMemberDetailsForm.value;
  }

  date = null;
  onChange(result: Date) {
  }

  reset() {
    return this.editMemberDetailsForm.reset();
  }


  onUpdateMember(data: any) {
  
    this.gymmemberservice.updateMemberDetails({id:this.myGymMember.id,...data});
    console.warn('Testing from UPDAtE');
    
  }
}


