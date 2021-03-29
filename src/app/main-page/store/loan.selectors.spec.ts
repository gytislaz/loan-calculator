import { getLoanErrors, getLoanResult } from './loan.selectors';

const loanStateMock = {
  loanResult: { loanTerm: 3 },
  error: { general: { code: '123' } },
};

describe('Loan Selectors', () => {
  it('getLoanResult should return loanResult', () => {
    expect(getLoanResult.projector(loanStateMock)).toStrictEqual({
      loanTerm: 3,
    });
  });

  it('getLoanErrors should return errors', () => {
    expect(getLoanErrors.projector(loanStateMock)).toStrictEqual({
      general: { code: '123' },
    });
  });
});
