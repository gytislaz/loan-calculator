import { Action, createReducer, on } from '@ngrx/store';
import { CalculatedLoan, LoanError } from '../types';
import { fetchLoan, fetchLoanFail, fetchLoanSuccess } from './loan.actions';

export const loanFeatureKey = 'loan';

export interface LoanState {
  loading: boolean;
  loaded: boolean;
  loanResult?: CalculatedLoan;
  error?: LoanError;
}

export const initialState: LoanState = {
  loaded: false,
  loading: false,
};

const reducer = createReducer(
  initialState,
  on(fetchLoan, (state: LoanState) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(fetchLoanSuccess, (state, action) => ({
    ...state,
    loaded: true,
    loading: false,
    loanResult: action.loanResult,
    error: undefined,
  })),
  on(fetchLoanFail, (state, action) => ({
    ...state,
    loaded: false,
    loading: false,
    loanResult: undefined,
    error: action.error,
  }))
);

export function loanReducer(
  state: LoanState | undefined,
  action: Action
): LoanState {
  return reducer(state, action);
}
