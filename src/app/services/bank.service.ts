import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(
    private http: HttpClient,
    private route: Router) { }


  addBank(data:any) {
    this.http.post('http://localhost:3000/banks/',data)
      .subscribe((res:any) => {
        console.warn("Banks-> ",res);
      })
  }

  getBankList() {

    return new Promise((resolve,result) => {
      this.http.get('http://localhost:3000/banks/')
        .subscribe((res:any) => {
          resolve(res)
        })

    })
  }





}
