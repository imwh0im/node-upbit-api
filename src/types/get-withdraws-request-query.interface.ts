import { OrderBy } from './order-by.interface';
import { WithdrawState } from './withdraw-status.interface';

export type GetWithdrawsRequestQuery = {
  /** Crypto Currency Code */
  currenecy: string;
  /** Withdrawal Status */
  state: WithdrawState;
  /** Withdraw Unique ID */
  uuids: string[];
  /** Withdraw TX ID */
  txids: string[];
  /** Default 100, Max 100 */
  limit?: number;
  /** Default 1 */
  page?: number;
  /** Default 'desc' */
  order_by?: OrderBy;
};
