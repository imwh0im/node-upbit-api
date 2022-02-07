type MemberLever = {
  /** Security Level */
  security_level: number;
  /** Fee Level */
  fee_level: number;
  /** Email Verified */
  email_verified: boolean;
  /** Real Name Verified */
  identity_auth_verified: boolean;
  /** Bank Account Verified */
  bank_account_verified: boolean;
  /** Kakao Pay Verified */
  kakao_pay_auth_verified: boolean;
  /** Lock This Account */
  locked: boolean;
  /** Wallet Withdraw Locked */
  wallet_locked: boolean;
};

type Currency = {
  /** Currency Code */
  code: string;
  /** Withdraw Fee */
  withdraw_fee: string;
  /** Is Coin */
  is_coin: boolean;
  /** Currency Wallet State */
  wallet_state: string;
  /** Wallet Support */
  wallet_support: 'deposit' | 'withdraw'[];
};

type Account = {
  /** Currency Code */
  currency: string;
  /** Available Order Price/Count */
  balance: string;
  /** Locked In Order Price/Count */
  locked: string;
  /** Average Buy Price */
  avg_buy_price: string;
  /** whether average buy price modify */
  avg_buy_price_modified: boolean;
  /** Base currency */
  unit_currency: string;
};

type WithdrawLimit = {
  /** Currency Code */
  currency: string;
  /** withdraw Minimum Price/Count */
  minimum: string | null;
  /** One Time Withdraw Maximum */
  onetime: string | null;
  /** Daily Withdraw Maximum */
  daily: string;
  /** Remaining Daily Withdraw Limit */
  remaining_daily: string;
  /** Remaining Daily Withdraw Limit On KRW */
  remaining_daily_krw: string;
  /** Withdraw Price/Count Number of decimal places */
  fixed: number | null;
  /** Is Support Withdraw */
  can_withdraw: boolean;
};

export type GetWithdrawsChanceResponse = {
  /** User Security Level */
  member_level: MemberLever;
  /** Currency Information */
  currency: Currency;
  /** User Account Information */
  account: Account;
  /** Information on withdrawal restrictions */
  withdraw_limit: WithdrawLimit;
};
