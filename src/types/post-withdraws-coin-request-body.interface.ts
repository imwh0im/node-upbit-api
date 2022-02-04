import { TransactionType } from './transaction-type.interface';

export type PostWithdrawsCoinRequestBody = {
  /** Crypto Currency Code */
  currency: string;
  /** Withdraw Count */
  amount: number;
  /** Withdrawal Address Registered in the Withdrawal Address */
  address: string;
  /** Second Withdrawal Address (Only the Coins Needed) */
  secondary_address?: string;
  /** Withdraw Transaction Type */
  transaction_type?: TransactionType;
};
