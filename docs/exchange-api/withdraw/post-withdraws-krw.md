### Example
```typescript

const param = {
  /** required */
  /** Withdraw price */
  amount: 100000,
};

// ES6
import ApiUpbit from 'node-upbit-api';

const res = await new ApiUpbit('accessKey', 'secretKey').postWithdrawsKrw(param);
console.log(res);

// ES5
var ApiUpbit = required('node-upbit-api');

new ApiUpbit('accessKey', 'secretKey').postWithdrawsKrw(param).then(res => console.log(res));

// console.log(res)
{
  /** Deposit And Withdrawal Type */
  type: 'withdraw',
  /** Withdraw Unique ID */
  uuid: '35a4f1dc-1db5-4d6b-89b5-7ec137875956',
  /** Crypto Currenecy Code */
  currency: 'KRW',
  /** Withdraw TX ID */
  txid: '98c15999f0bdc4ae0e8a-ed35868bb0c204fe6ec29e4058a3451e-88636d1040f4baddf943274ce37cf9cc',
  /** Withdrawal Status */
  state: 'submitting' | 'submitted' | 'almost_accepted' | 'rejected' | 'accepted' | 'processing' | 'done' | 'canceled',
  /** Create Datetime */
  created_at: '2019-02-28T15:17:51+09:00',
  /** Done Datetime */
  done_at: null,
  /** Withdraw Price/Count */
  amount: '100000',
  /** Withdraw Fee */
  fee: '0.0',
  /** Withdraw Type */
  transaction_type: 'default' | 'internal',
}
```
