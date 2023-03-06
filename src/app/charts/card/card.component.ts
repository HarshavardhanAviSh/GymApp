import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { adminSignup } from 'src/app/models/admin-signup.model';
import { gyminstitute } from 'src/app/models/gyminstitute.model';
import { AdminService } from 'src/app/services/admin.service';
import { GymonboardService } from 'src/app/services/gymonboard.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {

  constructor(
    private adminSvc:AdminService,
    private gymonboardSvc:GymonboardService,
    private route:Router
  ) { 
    this.getCount();
  }

    adminDetail : adminSignup[] = [];
    adminCount !: number;

    gymInstDetail : gyminstitute[] = [];
    gymInstCount !: number;

    onAdmin() {
      // this.route.navigate(['welcome'])

    }

    getCount() {
      this.adminSvc.getAdminCount()
        .then((detail:any) => {
          this.adminDetail = detail;
          this.adminCount = this.adminDetail.length;
          console.warn('Admins Are ',this.adminCount);
        })

        this.gymonboardSvc.getGymInstituteCount()
          .then((detail:any) => {
            this.gymInstDetail = detail;
            this.gymInstCount = this.gymInstDetail.length;
            console.warn('Total Gym Institutes Are: ',this.gymInstCount);
          })
    }

    onGymInstitute() {
      this.route.navigate(['gym-list']);
    }

}
