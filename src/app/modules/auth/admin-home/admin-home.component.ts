import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  constructor(private route:Router) {}

  // isAdminLoggedIn = new BehaviorSubject<boolean>(false);


  


  logout() {
    if(localStorage.getItem('admin')) {
      localStorage.removeItem('admin');
      this.route.navigate(['welcome']);
    }
  }

}
