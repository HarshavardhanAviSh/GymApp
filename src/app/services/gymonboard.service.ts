import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { gymMemberDetail } from '../models/gym-member-detail.model';
import { gyminstitute } from '../models/gyminstitute.model';



@Injectable({
  providedIn: 'root'
})
export class GymonboardService {


  constructor(
    private route:Router,
    private http:HttpClient
  ) { }

    
  
  addGymInstitute(data:gyminstitute) {
    return new Promise((resolve,result) => {
      this.http.post('http://localhost:3000/gyminstitutes',data)
      .subscribe((res:any) => {
        console.warn("res",res);
        resolve(res)
      })
    })
  }

  listGymInstitutes() {
    this.http.get('http://localhost:3000/gyminstitutes')
      .subscribe((res:any) => {
        console.warn("res",res);
      })
  }
  gymInstituteDetail : gyminstitute[] = [] 

  // getGymInstituteDetails() {
  //   return new Promise((resolve,result) => {
  //     this.http.get(`http://localhost:3000/gyminstitutes`)
  //       .subscribe((res:any) => {
  //         console.warn("res",res);
  //             this.gymInstituteDetail = res;
  //         resolve(result as unknown as gyminstitute)

  //       })
  //   })
  // }

  getGymInstituteDetails() {
    return new Promise((resolve,result) => {
      this.http.get(`http://localhost:3000/gyminstitutes`)
        .subscribe((res:any) => {
          console.warn("res",res);
              this.gymInstituteDetail = res;
          resolve(res as gymMemberDetail)
          
        })
    })
  }

}
