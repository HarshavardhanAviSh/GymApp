import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  constructor(private route:Router) {}


    

  

  logout() {
    if(localStorage.getItem('super-admin')) {
      localStorage.removeItem('super-admin');
      this.route.navigate(['welcome'])
    }
  }

}
