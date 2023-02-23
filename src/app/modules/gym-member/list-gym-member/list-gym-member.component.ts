import { Component } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { gymMemberDetail } from 'src/app/models/gym-member-detail.model';
import { practice } from 'src/app/practice/practice.model';
import { GymmemberService } from 'src/app/services/gymmember.service';
import { PracticeService } from 'src/app/services/practice.service';

@Component({
  selector: 'app-list-gym-member',
  templateUrl: './list-gym-member.component.html',
  styleUrls: ['./list-gym-member.component.css']
})
export class ListGymMemberComponent {

  constructor(private gymmemberservice:GymmemberService,
    private practiceservice:PracticeService) {
    
    this.listMembers();
  }

  showMessage : undefined | string;

  memberProfile : gymMemberDetail[]=[]

  memberProfileUpdate : gymMemberDetail[] = []



  memberEmail = '';

  listMembers() {
    this.gymmemberservice.listGymMember()
    .then((res:any) => {
      this.memberProfile = res;
      
    })  
  }
  
  updateMemberDetails(id:number) {
    this.gymmemberservice.updateGymMember(id)
    console.warn('ID is ',id);

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


  practiceDetail : practice[] = [];
  edit(id:number) {
    // console.warn("Edit MD", this.memberDetail);

    this.practiceservice.edit(id)
      .then((detail:any) => {
        this.practiceDetail = detail;
        console.warn("detail",detail);
        
        let name = detail.name;
        
      })
  }

}
