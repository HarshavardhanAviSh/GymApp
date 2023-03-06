import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  constructor(private route:Router) {}

  userType = '';
  
  ngOnInit() {
    this.route.events.subscribe((val:any) => {
      if(val.url) {
        if(localStorage.getItem('admin')) {
          this.userType = 'admin'
          console.warn('ADMIN AREA');
          
        } else {
          this.userType = 'default'
          console.warn('DEFAULT AREA');
        }
      }
    })
  }




}




