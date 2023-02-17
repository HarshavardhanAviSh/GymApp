import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { adminLogin } from 'src/app/models/admin-login.model';
import { adminSignup } from 'src/app/models/admin-signup.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent {

  constructor(
    private fb:FormBuilder,
    private adminservice:AdminService
    ) {}

    authErr : string | undefined = ''

  adminSignupForm!: any | FormGroup ;

  adminLoginForm!: any | FormGroup ;

  ngOnInit() {
    this.adminSignupForm = this.fb.group({
      firstName : new FormControl(''),
      middleName : new FormControl(),
      lastName : new FormControl(),
      dob :new FormControl(),
      contactNo : new FormControl(),
      email : new FormControl(),
      password : new FormControl(),
      confpass : new FormControl(),
    })

    this.adminLoginForm = this.fb.group({
      email : new FormControl(),
      password : new FormControl(),
    })
  }

  onAdminSignup(data:adminSignup) {
    // console.warn(this.adminForm.value);
    
    this.adminservice.adminSignup(data);
    
  }

  onAdminLogin(data:adminLogin) {
    this.adminservice.adminLogin(data);

    this.adminservice.isLoginError.subscribe((isErr) => {
      if(isErr) {
        this.authErr = 'Incorrect Username or Password '
        setTimeout(() => {this.authErr = undefined},4000)
      }
    })
  }

}
