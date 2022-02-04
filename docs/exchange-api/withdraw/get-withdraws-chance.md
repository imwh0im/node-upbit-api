### Example
```typescript

const param = {
  /** required */
  /** Crypto Currency Code */
  currency: 'BTC'
};

// ES6
import ApiUpbit from 'node-upbit-api';

const res = await new ApiUpbit('accessKey', 'secretKey').getWithdrawsChance(param);
console.log(res);

// ES5
var ApiUpbit = required('node-upbit-api');

new ApiUpbit('accessKey', 'secretKey').getWithdrawsChance(param).then(res => console.log(res));

// console.log(res)
{
  /** User Security Level */
  member_level: {
    /** Security Level */
    security_level: 3,
    /** Fee Level */
    fee_level: 0,
    /** Email Verified */
    email_verified: true,
    /** Real Name Verified */
    identity_auth_verified: true,
    /** Bank Account Verified */
    bank_account_verified: true,
    /** Kakao Pay Verified */
    kakao_pay_auth_verified: false,
    /** Lock This Account */
    locked: false,
    /** Wallet Withdraw Locked */
    wallet_locked: false
  },
  /** Currency Information */
  currency: {
    /** Currency Code */
    code: 'BTC',
    /** Withdraw Fee */
    withdraw_fee: '0.0005',
    /** Is Coin */
    is_coin: true,
    /** Currency Wallet State */
    wallet_state: 'working',
    /** Wallet Support */
    wallet_support: [
      'deposit',
      'withdraw',
    ]
  },
  /** User Account Information */
  account: {
    /** Currency Code */
    currency: 'BTC',
    /** Available Order Price/Count */
    balance: '10.0',
    /** Locked In Order Price/Count */
    locked: '0.0',
    /** Average Buy Price */
    avg_buy_price: '8042000',
    /** whether average buy price modify */
    avg_buy_price_modified: false,
    /** Base currency */
    unit_currency: 'KRW',
  },
  /** Information on withdrawal restrictions */
  withdraw_limit: {
    /** Currency Code */
    currency: 'BTC',
    /** withdraw Minimum Price/Count */
    minimum: null,
    /** One Time Withdraw Maximum */
    onetime: null,
    /** Daily Withdraw Maximum */
    daily: '10.0',
    /** Remaining Daily Withdraw Limit */
    remaining_daily: '10.0',
    /** Remaining Daily Withdraw Limit On KRW */
    remaining_daily_krw: '0.0',
    /** Withdraw Price/Count Number of decimal places */
    fixed: null,
    /** Is Support Withdraw */
    can_withdraw: true,
  }
}
```

