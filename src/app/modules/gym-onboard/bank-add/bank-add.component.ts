import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from 'src/app/services/bank.service';


@Component({
    selector: 'app-bank-add',
    templateUrl: './bank-add.component.html',
    styleUrls: ['./bank-add.component.css']
})
export class BankAddComponent {

    constructor(
        private fb: FormBuilder,
        private route: Router,
        private bankSvc: BankService

    ) { }

    bankDetails !: FormGroup

    ngOnInit() {
        this.bankDetails = this.fb.group({
            accHolderName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
            accType: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
            accNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
            IFSC: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),

            upi: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
            sid: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
            mid: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
            // : new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),

            bankname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
            branchname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
            bankstate: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),

            bankdistrict: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
            bankdicity: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
            bankcentre: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),

            bankaddress: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
            bankcode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
        })
    }

    back() {
        this.route.navigate(['onboard-page'])
    }

    onSubmit() {
        this.bankDetails.value;
    }

    onAdd(data: any) {
        this.bankSvc.addBank(data);

    }

    onReset() {
        this.bankDetails.value;
    }
}
