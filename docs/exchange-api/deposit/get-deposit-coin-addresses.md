### Example
```typescript

// ES6
import ApiUpbit from 'node-upbit-api';

const res = await new ApiUpbit('accessKey', 'secretKey').getDepositCoinAddresses();
console.log(res);

// ES5
var ApiUpbit = required('node-upbit-api');

new ApiUpbit('accessKey', 'secretKey').getDepositCoinAddresses().then(res => console.log(res));

// console.log(res)
[
  {
    /** Crypto Currency Code */
    currency: 'XRP',
    /** Deposit Address */
    deposit_address: '152rff1-d2v14v2rcxd-cd21vqdc1-2dsab',
    /** Secondary Deposit Address nullable Field */
    secondary_addres: '2rcf1dv2-vd2c2d1dvf-2rcf21wdx-vdw1cdxw',
  }
]
```
