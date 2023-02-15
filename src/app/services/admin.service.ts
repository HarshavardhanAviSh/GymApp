import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { adminLogin } from '../models/admin-login.model';
import { adminSignup } from '../models/admin-signup.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http:HttpClient,
    private route:Router
    ) { }


  adminSignup(data:adminSignup) {
    this.http.post('http://localhost:3000/super-admin-signup/',data,
    {observe:'response'}).subscribe((result:any) => {
      console.warn(result);
      console.warn('Signup Successful!');
      localStorage.setItem('super-admin',JSON.stringify(result.body));
      
    })
  }

  adminLogin(data:adminLogin) {
    this.http.get(`http://localhost:3000/super-admin-signup?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any) => {
      if(result && result.body && result.body.length) {
        console.warn('Login Success!');
        localStorage.setItem('super-admin',JSON.stringify(result.body))
        
      } else {
        console.warn('Login Failed!');
        
      }
    })
  }
}
