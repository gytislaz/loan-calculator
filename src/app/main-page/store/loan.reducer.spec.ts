import { fetchLoan, fetchLoanFail, fetchLoanSuccess } from './loan.actions';
import { initialState, loanReducer, LoanState } from './loan.reducer';

describe('Loan Reducer', () => {
  describe('fetchLoan', () => {
    it('should set loading to true and loaded to false', () => {
      const state: LoanState = loanReducer(
        initialState,
        fetchLoan({ loanParameters: { loanTerm: 360 } })
      );
      expect(state).toStrictEqual({
        ...initialState,
        loaded: false,
        loading: true,
      });
    });
  });

  describe('fetchLoanSuccess', () => {
    it('should add loanResult and set loading to false and loaded to true', () => {
      const state: LoanState = loanReducer(
        initialState,
        fetchLoanSuccess({ loanResult: { loanAmount: 2 } })
      );
      expect(state).toStrictEqual({
        ...initialState,
        loaded: true,
        loading: false,
        loanResult: { loanAmount: 2 },
        error: undefined,
      });
    });
  });

  describe('fetchLoanFail', () => {
    it('should add error and set loading to false and loaded to false', () => {
      const state: LoanState = loanReducer(
        initialState,
        fetchLoanFail({
          error: { fields: [{ params: 'amount', message: 'required' }] },
        })
      );
      expect(state).toStrictEqual({
        ...initialState,
        loaded: false,
        loading: false,
        loanResult: undefined,
        error: { fields: [{ params: 'amount', message: 'required' }] },
      });
    });
  });
});
