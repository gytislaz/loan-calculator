import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ChildrenAmountType, CoapplicantAmountType } from '../types';

import { LoanFormComponent } from './loan-form.component';

describe('LoanFormComponent', () => {
  let component: LoanFormComponent;
  let fixture: ComponentFixture<LoanFormComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jest.spyOn(component.submitForm, 'emit').mockImplementation(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChange', () => {
    it('should set serverError on field if server has it', () => {
      component.loanForm = formBuilder.group({
        monthlyIncome: 500,
      });
      component.loanError = {
        fields: [{ params: 'monthlyIncome', message: 'income too low' }],
      };
      component.ngOnChanges();
      expect(
        component.loanForm.controls.monthlyIncome.hasError('serverError')
      ).toBeTruthy();
    });
  });

  describe('onSubmit', () => {
    it('should emit formatted loan form value when all fields are filled', () => {
      component.loanForm = formBuilder.group({
        monthlyIncome: 500,
        requestedAmount: 30000,
        loanTerm: 360,
        children: ChildrenAmountType.None,
        coapplicant: CoapplicantAmountType.None,
      });
      component.onSubmit();
      expect(component.submitForm.emit).toHaveBeenCalledWith({
        children: 'NONE',
        coapplicant: 'NONE',
        loanTerm: 360,
        monthlyIncome: 500000,
        requestedAmount: 30000000,
      });
    });

    it('should emit loan form value unchanged when monthlyIncome and requestedAmount is not filed', () => {
      component.loanForm = formBuilder.group({
        monthlyIncome: 0,
        requestedAmount: 0,
        loanTerm: 360,
        children: ChildrenAmountType.None,
        coapplicant: CoapplicantAmountType.None,
      });
      component.onSubmit();
      expect(component.submitForm.emit).toHaveBeenCalledWith(
        component.loanForm.value
      );
    });
  });
});
