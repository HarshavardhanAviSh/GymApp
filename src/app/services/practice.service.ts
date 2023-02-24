import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PracticeComponent } from '../practice/practice.component';
import { practice } from '../models/practice.model';
import { GymmemberService } from './gymmember.service';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(
    private http:HttpClient,
    ) { 

    }

  add(data:any) {
    this.http.post('http://localhost:3000/practice ',data)
    .subscribe((res) => {
      console.warn(res);
    });
  
  }
  

  addPromise(data:any) {
    return new Promise((resolve,result) => {
      this.http.post('http://localhost:3000/practice ',data)
        .subscribe((res:any) => {
          console.warn(res);
          resolve(result as unknown as practice)
        })

    })

    
  }


  list(data:any) {

    return new Promise((resolve,result) => {
      this.http.get('http://localhost:3000/practice ')
      .subscribe((res) => {
        resolve(result as unknown as practice)
        
    })

      
  })
}

  

  edit(id:number) {

    return new Promise((resolve,result) => {
      this.http.get(`http://localhost:3000/gym-members/${id}`,
      {observe:'response'}).subscribe((res:any) => {
        console.warn("Obs",res);
        resolve(result as unknown as practice)
    })

      
    })
  }

  delete(id:number) {
    this.http.delete(`/${id}`)
  }

  getDetailByID() {

  }

  getDetailByUID() {
    
  }
}
