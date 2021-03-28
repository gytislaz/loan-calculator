import * as fromLoanForm from './loan.actions';

describe('loadLoanForms', () => {
  it('should return an action', () => {
    expect(fromLoanForm.loadLoanForms().type).toBe('[LoanForm] Load LoanForms');
  });
});
