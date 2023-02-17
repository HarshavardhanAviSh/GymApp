import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { gymMemberDetail } from '../models/gym-member-detail.model';

@Injectable({
  providedIn: 'root'
})
export class GymmemberService {

  constructor(
    private route: Router,
    private http: HttpClient
  ) { }

  // showMessage = new EventEmitter<boolean>(false);
  showMessage: string = '';

  addGymMember(data: gymMemberDetail) {

    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/gym-members/', data)
        .subscribe((result: any) => {
          resolve(result) 
            
        })
    })
  }

  listGymMember() {

    return new Promise((resolve, reject) => {

      this.http.get('http://localhost:3000/gym-members/')
        .subscribe((result: any) => {
          
        resolve(result as gymMemberDetail);
        })



    })
  }


}
