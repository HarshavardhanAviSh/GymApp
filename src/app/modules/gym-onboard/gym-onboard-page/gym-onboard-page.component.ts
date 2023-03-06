import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gym-onboard-page',
  templateUrl: './gym-onboard-page.component.html',
  styleUrls: ['./gym-onboard-page.component.css']
})
export class GymOnboardPageComponent {

  constructor(private route:Router) {}

  onAddGym() {
    this.route.navigate(['gym-add'])
  }
  onListGym() {
    this.route.navigate(['gym-list'])
  }

  back() {
    this.route.navigate(['onboard-page'])
  }

}
