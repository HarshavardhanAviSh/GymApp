import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { gymMemberDetail } from '../models/gym-member-detail.model';
import { test } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class GymmemberService {

  constructor(
    private route: Router,
    private http: HttpClient
  ) { }

  // showMessage = new EventEmitter<boolean>(false);

  getMemberDetailByID(id:any) {
    console.log(id, "ueyuerereyty") ;
    return this.http.get<any>(`http://localhost:3000/gym-members/${id}`)
    
  }




  getGymMemberList() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/gym-members/')
        .subscribe((result: any) => {
          console.warn(result);
        resolve(result as gymMemberDetail);
        })
    })
  }

  addGymMember(data: gymMemberDetail) {

    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/gym-members/', data)
      
        .subscribe((result: any) => {
          console.warn('data',data);
          console.warn('result',result);

          resolve(result) 
            
        })
    })
  }

  listGymMember() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/gym-members/')
        .subscribe((result: any) => {
        
        resolve(result as gymMemberDetail); 
        });
    })
    
  }
  

  updateGymMember(id:any) {
  
    return new Promise((resolve,result) => {
      this.http.get(`http://localhost:3000/gym-members/${id}`)
      .subscribe((result:any) => {
        resolve(result)
      })
    })
  

  }

  deleteGymMember(id:number) {
    return this.http.delete(`http://localhost:3000/gym-members/${id}`);
  }

  // deleteGymMember(id:number) {
  //   return this.http.get('http://localhost:3000/gym-members/:id')
  //   .subscribe((res:any) => {
  //     console.warn('Id is ',res);
  //   })
  // }

  // updateGymMember(id:number) {
  //   return this.http.get<gymMemberDetail[]>(`http://localhost:3000/gym-members/${id}`)
  // }





  
  

}
