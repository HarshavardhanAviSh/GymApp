import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gyminstitute } from 'src/app/models/gyminstitute.model';
import { GymonboardService } from 'src/app/services/gymonboard.service';

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.css']
})
export class GymListComponent implements OnInit {

  gymInstituteDetail: gyminstitute[] = []

  constructor(
    private gymonboardSvc: GymonboardService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getInstituteDetails();
  }

  back() {
    this.route.navigate(['onboard-page'])
  }


  // getInstituteDetails() {
  //   this.gymonboardSvc.getGymInstituteDetails()
  //     .then((detail:any) => {
  //       console.warn("From Detail");

  //       this.gymInstituteDetail = detail;
  //       console.warn("From  ",this.gymInstituteDetail);

  //       let detailArray = detail.length;
  //       let detailArrayL = this.gymInstituteDetail.length

  //       console.log(detailArray);
  //       console.log(detailArrayL);
  //       for(let i=0; i<detailArray; i++) {
  //         // detailArray.accHolderName;    
  //         console.log(detailArray);

  //       }
  //     })
  // }

  GmInstCnt: number | undefined
  accHolderName = '';

  getInstituteDetails() {
    this.gymonboardSvc.getGymInstituteDetails()
      .then((detail: any) => {
        console.warn("From Detail");

        this.gymInstituteDetail = detail;
        console.warn("From  ", this.gymInstituteDetail);
        
      })
  }
}

