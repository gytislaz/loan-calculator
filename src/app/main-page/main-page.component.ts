import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchLoan } from './store/loan.actions';
import { getLoanResult } from './store/loan.selectors';
import { CalculatedLoan, LoanParameters } from './types';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public loanResult$: Observable<CalculatedLoan>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loanResult$ = this.store.select(getLoanResult);
  }

  public onSubmitForm(loan: LoanParameters): void {
    this.store.dispatch(fetchLoan({ loanParameters: loan }));
  }
}
