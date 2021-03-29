import { ThrowStmt } from '@angular/compiler';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ChildrenAmountType,
  CoapplicantAmountType,
  LoanError,
  LoanParameters,
} from 'src/app/main-page/types';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss'],
})
export class LoanFormComponent implements OnChanges {
  @Input() loanError: LoanError | null | undefined;
  @Output()
  submitForm: EventEmitter<LoanParameters> = new EventEmitter<LoanParameters>();

  public loanForm: FormGroup = new FormGroup({
    monthlyIncome: new FormControl('', Validators.required),
    requestedAmount: new FormControl('', Validators.required),
    loanTerm: new FormControl('', Validators.required),
    children: new FormControl(''),
    coapplicant: new FormControl(''),
  });

  readonly ChildrenAmountType: typeof ChildrenAmountType = ChildrenAmountType;
  readonly CoapplicantAmountType: typeof CoapplicantAmountType = CoapplicantAmountType;

  public ngOnChanges(): void {
    this.loanError?.fields?.forEach((field) => {
      const formControl = this.loanForm.get(field.params);
      if (formControl) {
        formControl.setErrors({
          serverError: field.message,
        });
      }
    });
  }

  public onSubmit(): void {
    const loanFormControls = this.loanForm.controls;
    const threeSpacesComma: number = 1000;
    const formattedLoanParameters = {
      ...this.loanForm.value,
      monthlyIncome: loanFormControls.monthlyIncome.valid
        ? loanFormControls.monthlyIncome.value * threeSpacesComma
        : undefined,
      requestedAmount: loanFormControls.requestedAmount.valid
        ? loanFormControls.requestedAmount.value * threeSpacesComma
        : undefined,
    };
    this.submitForm.emit(formattedLoanParameters);
  }
}
