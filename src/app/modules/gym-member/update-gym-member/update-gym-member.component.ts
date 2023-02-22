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

  showMessage: string = '';

  memberProfile: gymMemberDetail[] = [];
  memberDetail: undefined | gymMemberDetail;

  constructor(
    private gymmemberservice: GymmemberService,
    private aroute: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder
  ) { }

  refreshMemberDetails() {
    this.gymmemberservice.getGymMemberList()
      .then((res: any) => {
        // this.memberProfile = res;

      let memberUId = res.uid;
      let memberFirstname = res.fname;
      let memberLastname = res.lname;
      let memberContactNo = res.contactno;
      let memberEmail = res.email;
      let memberGender = res.gender;
      let memberDOB = res.dob;

      let memberAddr1 = res.address1;
      let memberAddr2 = res.address2;
      let memberCity = res.city;
      let memberState = res.state;
      let memberLocation = res.location;
      let memberLandmark = res.landmark;
      let memberPincode = res.pincode;
      let memberNation = res.nationality;
      let memberMembership = res.membership;

      console.warn("memberUId:"+memberUId,"memberFirstname"+memberFirstname);
      
      })
  }

  updateMemberDetails(id: number) {
    this.gymmemberservice.updateGymMember(id);
    console.warn('ID is ', id);
  }

  deleteMemberDetails(id: number) {
    this.gymmemberservice.deleteGymMember(id)
      .subscribe((res) => {
        if (res) {
          this.showMessage = 'Delting ID: ' + id;
          setTimeout(() => {
            this.showMessage = '';
          }, 3000);
          this.refreshMemberDetails();
        }
      })
  }

  custInformation !: FormGroup;

  ngOnInit() {
    // this.refreshMemberDetails();
    let memberId :any= this.aroute.snapshot.paramMap.get('id');
    console.warn("memberId=", memberId);
    
    this.gymmemberservice.getMemberDetailByID(memberId).subscribe((res)=>{
      console.warn(res);
    })
      
    this.custInformation = this.fb.group({

      fname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      lname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      uid: new FormControl(''),

      membership: new FormControl('', [Validators.required]),
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

    let data = this.custInformation.value;
    console.warn(data);

  }

  reset() {
    this.custInformation.reset();
  }

  onUpdate(id: number) {
    this.route.navigate([`update-gym-member/${id}`]);

    
  }
}


