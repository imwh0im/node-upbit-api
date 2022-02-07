export type GetWithdrawRequestQuery = {
  /** Withdraw Unique ID */
  uuid?: string;
  /** Withdraw TX ID */
  txid?: string;
  /** Crypto Currency Code */
  currency: string;
};
