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
    private http: HttpClient,
    private route: Router
  ) { }

  isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  adminSignup(data: adminSignup) {
    this.http.post('http://localhost:3000/admin/', data,
      { observe: 'response' }).subscribe((result: any) => {
        console.warn(result);
        console.warn('Signup Successful!');
        localStorage.setItem('admin', JSON.stringify(result.body));
        this.isLoggedIn.next(true);
        this.route.navigate(['onboard-page']);
      })
  }

  adminLogin(data: adminLogin) {
    this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((result: any) => {
        if (result && result.body && result.body.length) {
          console.warn('Login Success!');
          this.isLoggedIn.next(true);
          localStorage.setItem('admin', JSON.stringify(result.body))
          // this.route.navigate(['gym-admin-home'])
          this.route.navigate(['onboard-page'])

        } else {
          console.warn('Login Failed!');
          this.isLoginError.emit(true);
        }
      })
  }

  
  listAdmins() {
    return new Promise((resolve,result) => {
      this.http.get(`http://localhost:3000/admin/`)
        .subscribe((result:any) => {
          console.warn("result",result);
          
          resolve(result as adminSignup)
        })
    })
  }


  getAdminCount() {
    return new Promise((resolve,result) => {
      this.http.get(`http://localhost:3000/admin/`)
        .subscribe((result:any) => {
          console.warn("result",result);
          resolve(result)
        })
    })
  }
}
