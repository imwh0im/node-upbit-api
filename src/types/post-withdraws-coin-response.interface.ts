import { GetWithdrawResponse } from './get-withdraw-response.interface';

export type PostWithdrawsCoinResponse = GetWithdrawResponse & {
  /** KRW Conversion price. */
  krw_amount: string;
};
