export interface LoanParameters {
  monthlyIncome?: number;
  requestedAmount?: number;
  loanTerm?: number;
  children?: ChildrenAmountType;
  coapplicant?: CoapplicantAmountType;
}

export interface CalculatedLoan {
  loanAmount?: number;
  interestRate?: number;
}

export interface LoanError {
  general?: GeneralError;
  fields?: Field[];
}

export interface GeneralError {
  code?: string;
  message?: string;
}

export interface Field {
  params: string;
  message: string;
}

export enum ChildrenAmountType {
  None = 'NONE',
  Single = 'SINGLE',
  Multiple = 'MULTIPLE',
}

export enum CoapplicantAmountType {
  None = 'NONE',
  Single_Borrower = 'SINGLE_BORROWER',
  Multiple_Borrowers = 'MULTIPLE_BORROWERS',
}
