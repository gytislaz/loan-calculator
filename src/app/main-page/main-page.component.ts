import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchLoan } from './store/loan.actions';
import { getLoanErrors, getLoanResult } from './store/loan.selectors';
import { CalculatedLoan, LoanError, LoanParameters } from './types';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public loanResult$: Observable<CalculatedLoan | undefined>;
  public loanError$: Observable<LoanError | undefined>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loanResult$ = this.store.select(getLoanResult);
    this.loanError$ = this.store.select(getLoanErrors);
  }

  public onSubmitForm(loan: LoanParameters): void {
    this.store.dispatch(fetchLoan({ loanParameters: loan }));
  }
}
