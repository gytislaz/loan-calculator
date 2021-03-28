import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { API_URL, API_KEY } from '../constants';
import { LoanParameters, CalculatedLoan } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  constructor(private httpClient: HttpClient) {}

  private headers = new HttpHeaders({
    'X-API-KEY': API_KEY,
    'Content-Type': 'text/plain',
  });

  fetchLoan(loan: LoanParameters): Observable<CalculatedLoan> {
    return this.httpClient
      .post(API_URL, loan, { headers: this.headers })
      .pipe(map((response: CalculatedLoan) => response));
  }
}
