### Example
```typescript
// ES6
import * as ApiUpbit from 'node-upbit-api';

const res = await new ApiUpbit('accessKey', 'secretKey').getAccounts();
console.log(res);

// ES5
const ApiUpbit = required('node-upbit-api');

new ApiUpbit('accessKey', 'secretKey').getAccounts().then(res => console.log(res));

// console.log(res)
[
  {
    /** Currency string of UPPER CASE */
    currency: 'BTC',
    /** orderable count/price */
    balance: '10'.
    /** Tied up order count/price */
    locked: '0',
    /** Average price */
    avg_buy_price: '34,532,532',
    /** Whether It modified average price */
    avg_buy_price_modified: false,
    /** Currency for of Average price */
    unit_currency: 'KRW',
  }
]
```
