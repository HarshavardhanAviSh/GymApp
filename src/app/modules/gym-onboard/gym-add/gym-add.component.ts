import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gyminstitute } from 'src/app/models/gyminstitute.model';
import { GymonboardService } from 'src/app/services/gymonboard.service';

@Component({
  selector: 'app-gym-add',
  templateUrl: './gym-add.component.html',
  styleUrls: ['./gym-add.component.css']
})
export class GymAddComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private gymonboardSvc: GymonboardService,
    private route: Router
  ) { }

  addGymForm !: FormGroup;
  isMessage = '';

  ngOnInit(): void {
    this.addGymForm = this.fb.group({

      gymid: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z0-9]+$')]),
      gymname: new FormControl('',Validators.required),
      gemail: new FormControl('',[Validators.required,Validators.email]),
      gcontactno: new FormControl(Validators.required,Validators.pattern('^[0-9]+$')),
      gymaddress: new FormControl('',Validators.required),

      gymlandmark: new FormControl(),
      gymcity: new FormControl('',Validators.required),
      gymstate: new FormControl('',Validators.required),
      gympincode: new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')])
    })
  }

  onSubmit() {
    console.warn(this.addGymForm.value);
    // this.addGymForm.value
  }
  
  // onAdd(data: gyminstitute) {
  //   this.gymonboardSvc.addGymInstitute(data);
  //   this.route.navigate(['gym-list'])
  // }

  onAdd(data: gyminstitute) {
    this.gymonboardSvc.addGymInstitute(data)
      .then((detail:any) => {
        if(detail) {
          this.isMessage = 'New Gym Intitute Added Successfully!';
        
          setTimeout(() => {
            this.isMessage = '';
          },4000)
        }
      })

    // this.route.navigate(['gym-list'])
  }

  onReset() {
    this.addGymForm.reset();
  }

  back() {
    this.route.navigate(['onboard-page'])
  }





  
}
