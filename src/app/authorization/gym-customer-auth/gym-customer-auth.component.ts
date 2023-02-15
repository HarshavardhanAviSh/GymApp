import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';





@Component({
  selector: 'app-gym-customer-auth',
  templateUrl: './gym-customer-auth.component.html',
  styleUrls: ['./gym-customer-auth.component.css']
})
export class GymCustomerAuthComponent {

  
  //   

  constructor(private fb: FormBuilder) {}


  custInformation !: FormGroup;
  // custAddress !: FormGroup;
  // custGuardInfo !: FormGroup;


  srno = 1;
  fname = 'Ashmith';
  lname = 'Thakur';
  UID = 'Not generated yet';
  Gender = 'Male';
  Email = 'ashmith@gmail.com';
  MobileNo = '9789878690';
  DOB = '01-01-2001';
  City = 'Thane';
  State = 'Maharashtra';
  Pincode = 400701;
  Nationality = 'Indian';

  custs = [ 'Sidharth'

  ]


  ngOnInit() {
    this.custInformation = this.fb.group({

      fname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      lname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      uid: new FormControl(''),

      mobileno: new FormControl('', [Validators.required, Validators.pattern('[0-9]+$')]),
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




    // this.custGuardInfo = new FormGroup({
    //   guardianfname : new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]+$')]),
    //   guardianlname : new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]+$')]),
    //   guardiancontact : new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
    //   guardianemail : new FormControl('',[Validators.required,Validators.email]),

    // })
  }


  submit() {
    
    let data = this.custInformation.value;
    console.warn(data);

    console.warn(data);
    

  }

  reset() {
    this.custInformation.reset();
  }



}




