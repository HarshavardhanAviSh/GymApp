import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PracticeComponent } from '../practice/practice.component';
import { practice } from '../practice/practice.model';
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
    })
  
  }
  

  list() {
    this.http.get('http://localhost:3000/practice ')
    .subscribe((res) => {
      console.warn(res);
      
  })
}

  

  edit(id:number) {

    return new Promise((resolve,result) => {
      this.http.get(`http://localhost:3000/practice/${id}`,
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
