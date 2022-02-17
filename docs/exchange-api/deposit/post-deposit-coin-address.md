### Example
```typescript

const param = {
  /** required */
  /** Crypto Currency Code */
  currenecy: 'XRP',
};

// ES6
import ApiUpbit from 'node-upbit-api';

const res = await new ApiUpbit('accessKey', 'secretKey').postDepositCoinAddress(param);
console.log(res);

// ES5
var ApiUpbit = required('node-upbit-api');

new ApiUpbit('accessKey', 'secretKey').postDepositCoinAddress(param).then(res => console.log(res));

/**
 * The creation of deposit addresses is asynchronous on the server.
 * When requesting to issue an address, <PostDepositsCoinAddressPendingResponse> will be returned as a result, and <PostDepositsCoinAddressPendingResponse> will continue to be returned until the address issuance is completed.
 */

// console.log(res)
// Before Issued
{
  /** Whether success Request */
  success: true,
  /** Message about the result of the request. */
  message: 'XRP 입금 주소를 생성중입니다.',
}

// console.log(res)
// After Issued
{
  /** Crypto Currency Code */
  currency: 'XRP',
  /** Deposit Address */
  deposit_address: '152rff1-d2v14v2rcxd-cd21vqdc1-2dsab',
  /** Secondary Deposit Address nullable Field */
  secondary_addres: '2rcf1dv2-vd2c2d1dvf-2rcf21wdx-vdw1cdxw',
}
```
