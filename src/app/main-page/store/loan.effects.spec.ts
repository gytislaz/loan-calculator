import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoanEffects } from './loan.effects';

describe('LoanEffects', () => {
  let actions$: Observable<any>;
  let effects: LoanEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoanEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LoanEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
