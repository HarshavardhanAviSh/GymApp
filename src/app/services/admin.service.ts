import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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

    isLoggedIn = new BehaviorSubject<boolean>(false);
    isLoginError = new EventEmitter<boolean>(false);

  adminSignup(data:adminSignup) {
    this.http.post('http://localhost:3000/super-admin-signup/',data,
    {observe:'response'}).subscribe((result:any) => {
      console.warn(result);
      console.warn('Signup Successful!');
      localStorage.setItem('super-admin',JSON.stringify(result.body));
<<<<<<< HEAD
      this.isLoggedIn.next(true);
      this.route.navigate(['admin-page']);

=======
      // this.isLoggedIn.next(true);
      this.route.navigate(['gym-admin-home']);
>>>>>>> origin
    })
  }

  adminLogin(data:adminLogin) {
    this.http.get(`http://localhost:3000/super-admin-signup?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any) => {
      if(result && result.body && result.body.length) {
        console.warn('Login Success!');
        this.isLoggedIn.next(true);
        localStorage.setItem('super-admin',JSON.stringify(result.body))
<<<<<<< HEAD
        this.route.navigate(['admin-page'])
=======
        this.route.navigate(['gym-admin-home'])
>>>>>>> origin
      } else {
        console.warn('Login Failed!');
        this.isLoginError.emit(true);
      }
<<<<<<< HEAD
=======
      //
>>>>>>> origin
    })
  }
}
