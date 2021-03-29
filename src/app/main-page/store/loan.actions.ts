import { createAction, props } from '@ngrx/store';
import { LoanParameters, CalculatedLoan, LoanError } from '../types';

export enum FetchLoanActionTypes {
  FetchLoan = '[Loan] Fetch Loan',
  FetchLoanSuccess = '[Loan] Fetch Loan Success',
  FetchLoanFail = '[Loan] Fetch Loan Fail',
}

export const fetchLoan = createAction(
  FetchLoanActionTypes.FetchLoan,
  props<{ loanParameters: LoanParameters }>()
);

export const fetchLoanSuccess = createAction(
  FetchLoanActionTypes.FetchLoanSuccess,
  props<{ loanResult: CalculatedLoan | undefined }>()
);

export const fetchLoanFail = createAction(
  FetchLoanActionTypes.FetchLoanFail,
  props<{ error: LoanError | undefined }>()
);
