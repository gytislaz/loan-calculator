import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ChildrenAmountType,
  CoapplicantAmountType,
  LoanParameters,
} from 'src/app/main-page/types';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss'],
})
export class LoanFormComponent implements OnInit {
  @Output()
  submitForm: EventEmitter<LoanParameters> = new EventEmitter<LoanParameters>();

  public loanForm: FormGroup = new FormGroup({
    monthlyIncome: new FormControl('', Validators.required),
    requestedAmount: new FormControl('', Validators.required),
    loanTerm: new FormControl('', Validators.required),
    children: new FormControl('', Validators.required),
    coapplicant: new FormControl('', Validators.required),
  });

  readonly ChildrenAmountType: typeof ChildrenAmountType = ChildrenAmountType;
  readonly CoapplicantAmountType: typeof CoapplicantAmountType = CoapplicantAmountType;

  constructor() {}

  ngOnInit(): void {}

  public onSubmit(): void {
    this.submitForm.emit(this.loanForm.value);
  }
}
