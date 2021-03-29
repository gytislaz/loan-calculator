import { fetchLoan, fetchLoanFail, fetchLoanSuccess } from './loan.actions';

describe('fetchLoadActions', () => {
  it('should create a fetchLoan action', () => {
    expect(fetchLoan({ loanParameters: {} })).toStrictEqual({
      type: '[Loan] Fetch Loan',
      loanParameters: {},
    });
  });

  it('should create a fetchLoanSuccess action', () => {
    expect(fetchLoanSuccess({ loanResult: {} })).toStrictEqual({
      type: '[Loan] Fetch Loan Success',
      loanResult: {},
    });
  });

  it('should create a fetchLoanFail action', () => {
    expect(fetchLoanFail({ error: {} })).toStrictEqual({
      type: '[Loan] Fetch Loan Fail',
      error: {},
    });
  });
});
