import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { bankDetail } from 'src/app/models/bankdetail.model';
import { gyminstitute } from 'src/app/models/gyminstitute.model';
import { BankService } from 'src/app/services/bank.service';
import { GymonboardService } from 'src/app/services/gymonboard.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent {

  constructor(
    private route: Router,
    private gymonboardSvc: GymonboardService,
    private bankSvc: BankService
  ) {
    this.getBankDetails();
  }

  gymInstituteDetail: gyminstitute[] = []
  bankDetail: bankDetail[] = []

  back() {
    this.route.navigate(['onboard-page'])
  }

  getDetails() {
    this.gymonboardSvc.getGymInstituteDetails()
      .then((detail: any) => {
        this.gymInstituteDetail = detail;
        console.warn(detail);

      })
  }

  getBankDetails() {
    this.bankSvc.getBankList()
      .then((detail: any) => {
        this.bankDetail = detail;
        console.warn(this.bankDetail);
      })
  }


}
