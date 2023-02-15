import { Component } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-gym-admin-page',
  templateUrl: './gym-admin-page.component.html',
  styleUrls: ['./gym-admin-page.component.css']
})
export class GymAdminPageComponent {

  constructor(private adminservice:AdminService,private route:Router) {}

  onLogout() {

    localStorage.removeItem('super-admin'),
    
      this.route.navigate(['welcome'])
  }

}
