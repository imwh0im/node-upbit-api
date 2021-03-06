import { TransactionType } from './transaction-type.interface';
import { WithdrawState } from './withdraw-status.interface';

export type GetWithdrawResponse = {
  /** Deposit And Withdrawal Type */
  type: string;
  /** Withdraw Unique ID */
  uuid: string;
  /** Currenecy Code */
  currency: string;
  /** Withdraw TX ID */
  txid: string;
  /** Withdrawal Status */
  state: WithdrawState;
  /** Create Datetime */
  created_at: string;
  /** Done Datetime */
  done_at: string;
  /** Withdraw Price/Count */
  amount: string;
  /** Withdraw Fee */
  fee: string;
  /** Withdraw Type */
  transaction_type: TransactionType;
};
