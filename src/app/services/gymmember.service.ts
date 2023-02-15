import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { gymMemberDetail } from '../models/gym-member-detail.model';

@Injectable({
  providedIn: 'root'
})
export class GymmemberService {

  constructor(
    private route:Router,
    private http:HttpClient
    ) { }

    // showMessage = new EventEmitter<boolean>(false);
    showMessage : string = '';

    addGymMember(data:gymMemberDetail) {
      return this.http.post('http://localhost:3000/gym-members/',data,
      {observe:'response'}).subscribe((result:any) => {
        console.warn('Member Added Successfully!',result);
        if(result) {
          this.showMessage = 'Member Added Successfully!'
        }
      })
    }

    listGymMember() {
      return this.http.get('http://localhost:3000/gym-members/')
      .subscribe((result:any) => {
        console.warn("Listing Members... -> ",result);
        
      })
    }


}
