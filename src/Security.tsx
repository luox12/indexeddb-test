export interface Security {
  id: string;
  code: string;
  name: string;
  type: string;
  isValid: boolean;
  currency: string;
  exchanges: string[];
  otherTypes: string[];
  status: string;
  issuer: string;
}
