import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchLoan, fetchLoanSuccess, fetchLoanFail } from './loan.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoanService } from '../services/loan.service';

@Injectable()
export class LoanEffects {
  constructor(private actions$: Actions, private loanService: LoanService) {}

  fetchLoan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchLoan),
      mergeMap((action) => {
        return this.loanService.fetchLoan(action.loanParameters).pipe(
          map((response) => fetchLoanSuccess({ loanResult: response })),
          catchError((error) => of(fetchLoanFail({ error: error.error })))
        );
      })
    )
  );
}
