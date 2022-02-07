### Example
```typescript

const param = {
  /** required */
  /** Crypto Currency Code */
  currenecy: 'XRP';
  /** required */
  /** Withdrawal Status */
  state: 'submitting' | 'submitted' | 'almost_accepted' | 'rejected' | 'accepted' | 'processing' | 'done' | 'canceled',
  /** required */
  /** Withdraw Unique ID */
  uuids: [];
  /** required */
  /** Withdraw TX ID */
  txids: [];
  /** optional */
  /** Default 100, Max 100 */
  limit: 100;
  /** optional */
  /** Default 1 */
  page: 1;
  /** optional */
  /** Default 'desc' */
  order_by: 'desc' | 'asc';
};

// ES6
import ApiUpbit from 'node-upbit-api';

const res = await new ApiUpbit('accessKey', 'secretKey').getWithdraws(param);
console.log(res);

// ES5
var ApiUpbit = required('node-upbit-api');

new ApiUpbit('accessKey', 'secretKey').getWithdraws(param).then(res => console.log(res));

// console.log(res)
[
  {
    /** Deposit And Withdrawal Type */
    type: 'withdraw',
    /** Withdraw Unique ID */
    uuid: '35a4f1dc-1db5-4d6b-89b5-7ec137875956',
    /** Crypto Currenecy Code */
    currency: 'XRP';
    /** Withdraw TX ID */
    txid: '98c15999f0bdc4ae0e8a-ed35868bb0c204fe6ec29e4058a3451e-88636d1040f4baddf943274ce37cf9cc';
    /** Withdrawal Status */
    state: 'submitting' | 'submitted' | 'almost_accepted' | 'rejected' | 'accepted' | 'processing' | 'done' | 'canceled',
    /** Create Datetime */
    created_at: '2019-02-28T15:17:51+09:00';
    /** Done Datetime */
    done_at: '2019-02-28T15:22:12+09:00';
    /** Withdraw Price/Count */
    amount: '1.0';
    /** Withdraw Fee */
    fee: '0.0';
    /** Withdraw Type */
    transaction_type: 'default' | 'internal';
  }
]
```

