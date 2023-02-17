import { Component } from '@angular/core';
import { gymMemberDetail } from 'src/app/models/gym-member-detail.model';
import { GymmemberService } from 'src/app/services/gymmember.service';

@Component({
  selector: 'app-list-gym-member',
  templateUrl: './list-gym-member.component.html',
  styleUrls: ['./list-gym-member.component.css']
})
export class ListGymMemberComponent {

  constructor(private gymmemberservice:GymmemberService) {
    
    this.listGymMembers();
  }

  memberProfile : gymMemberDetail[]=[]

  listGymMembers() {
    this.gymmemberservice.listGymMember()
    .then((res:any) => {
      this.memberProfile = res;
    })
  }


}
