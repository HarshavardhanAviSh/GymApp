import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent {

  constructor(private fb:FormBuilder) {}

  adminForm!: any | FormGroup ;




  ngOnInit() {
    this.adminForm = this.fb.group({
      firstName : new FormControl(''),
      middleName : new FormControl(),
      lastName : new FormControl(),
      contactNo : new FormControl(),
      email : new FormControl(),
      password : new FormControl(),
      confpass : new FormControl(),
    })
  }

  onSignup() {
    console.log(this.adminForm.value);
    console.warn(this.adminForm.value);
    
    
  }

  onLogin() {


  }


}
