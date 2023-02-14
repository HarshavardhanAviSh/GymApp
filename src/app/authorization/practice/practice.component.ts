import { Component } from '@angular/core';
import { FormGroup, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  constructor(private fb:UntypedFormBuilder) {}

  
  getData(val:any) {

    console.warn('Data is showable',val);


  } 
  

}