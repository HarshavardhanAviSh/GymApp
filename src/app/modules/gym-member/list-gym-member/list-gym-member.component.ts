import { Component } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { gymMemberDetail } from 'src/app/models/gym-member-detail.model';
import { practice } from 'src/app/models/practice.model';
import { GymmemberService } from 'src/app/services/gymmember.service';
import { PracticeService } from 'src/app/services/practice.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-list-gym-member',
  templateUrl: './list-gym-member.component.html',
  styleUrls: ['./list-gym-member.component.css']
})
export class ListGymMemberComponent {

  constructor(
    private gymmemberservice:GymmemberService,
    private practiceservice:PracticeService,
    private route:Router,
    private stateSvc: StateService
    ) {
    
    this.listMembers();
  }

  showMessage : undefined | string;
  memberProfile : gymMemberDetail[]=[]
  // memberProfileUpdate : gymMemberDetail[] = []

  listMembers() {
    this.gymmemberservice.listGymMember()
    .then((res:any) => {
      this.memberProfile = res;
    })  
  }
  
  editMemberDetails(id:number) {
    console.log(id);
    this.gymmemberservice.getPrefilledData(id)
      .then((user:any) => {
        this.stateSvc.editGymMember = user;
        this.route.navigate([`update-gym-member/`])
      })
  } 

  deleteMemberDetails(id:number) {
    this.gymmemberservice.deleteGymMember(id)
    .subscribe((res) => {
      if(res) {
        this.showMessage = 'Delting ID: '+id;
        setTimeout(() => {
          this.showMessage = '';
        }, 3000);
        this.getMemberDetails();
      }
    })
  }  

  getMemberDetails() {
    this.gymmemberservice.getGymMemberList()
    .then((res:any) => {
      this.memberProfile = res;
    })
  }

  // practiceDetail : practice[] = [];
  
}
