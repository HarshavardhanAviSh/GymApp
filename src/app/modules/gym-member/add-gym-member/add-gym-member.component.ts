import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { gymMemberDetail } from 'src/app/models/gym-member-detail.model';
import { GymmemberService } from 'src/app/services/gymmember.service';

@Component({
  selector: 'app-add-gym-member',
  templateUrl: './add-gym-member.component.html',
  styleUrls: ['./add-gym-member.component.css']
})
export class AddGymMemberComponent {

  gymMembers : gymMemberDetail[] = []

  constructor(
    private fb: FormBuilder,
    private gymmemberservice:GymmemberService  ) 
  
    {
      this.listMember();
    }

    memberDetailsForm !: FormGroup;

  showMessage : string | undefined = '';

  
    
  ngOnInit() {
    this.memberDetailsForm = this.fb.group({

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
    let data = this.memberDetailsForm.value;
    console.warn(data);
  }

  reset() {
    this.memberDetailsForm.reset();
  }

  // onAddMember() {
  //   const data = this.custInformation.value;
  //   this.gymmemberservice.addGymMember(data)
  //   .then((res) => {
  //     this.listMember();
  //     this.showMessage = 'Member Added Successfully!' ;
  //     setTimeout(() => {
  //       this.showMessage = '';
  //     }, 3000);
  //   })
  // }

  memberDetail : gymMemberDetail[] = [] ;

  onAddMember() {
    const data = this.memberDetailsForm.value;
    this.gymmemberservice.addGymMember(data)
    .then((res:any) => {
      this.memberDetail = res;
      this.listMember();
      this.showMessage = 'Member Added Successfully!' ;
      setTimeout(() => {
        this.showMessage = '';
      }, 3000);
    })
  }


  listMember() {
    this.gymmemberservice.listGymMember()
    .then((res:any) => {
      console.log(res);
      this.gymMembers = res;
    })
  }

  date = null;
  onChange(result:Date) {
    console.warn(result);
    
  }

}
