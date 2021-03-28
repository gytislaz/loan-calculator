import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loanFeatureKey, LoanState } from './loan.reducer';

export const getLoansState = createFeatureSelector<LoanState>(loanFeatureKey);

export const getLoanResult = createSelector(
  getLoansState,
  (state: LoanState) => state.loanResult || {}
);

export const getLoanErrors = createSelector(
  getLoansState,
  (state: LoanState) => state.error || {}
);
