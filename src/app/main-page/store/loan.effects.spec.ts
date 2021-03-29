import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LoanEffects } from './loan.effects';
import { LoanService } from '../services/loan.service';

describe('LoanEffects', () => {
  let actions$: Observable<{}>;
  let effects: LoanEffects;
  let store: MockStore;
  let loanService: LoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoanEffects,
        provideMockActions(() => actions$),
        provideMockStore({}),
        {
          provide: LoanService,
          useValue: {
            send: () => {},
          },
        },
      ],
    });

    effects = TestBed.inject(LoanEffects);
    store = TestBed.inject(MockStore);
    loanService = TestBed.inject(LoanService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
