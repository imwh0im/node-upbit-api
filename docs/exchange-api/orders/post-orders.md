### Example
```typescript

const param = {
  /** required */
  /** Market Unique ID */
  market: 'KRW-BTC',
  /** required */
  /** Order Method */
  side: 'bid' | 'ask',
  /** required */
  /** Volume For Ask Order */
  volume: '1.0',
  /** required */
  /** Price For Ask Order */
  price: '1000',
  /** required */
  /** Order Type */
  ord_type: 'limit' | 'price' | 'market',
  /** optional */
  /** User Custom Value */
  identifier: 'custom value',
};

// ES6
import ApiUpbit from 'node-upbit-api';

const res = await new ApiUpbit('accessKey', 'secretKey').postOrder(param);
console.log(res);

// ES5
var ApiUpbit = required('node-upbit-api');

new ApiUpbit('accessKey', 'secretKey').postOrder(param).then(res => console.log(res));

// console.log(res)
{
  /** Order Unique ID */
  uuid: '9ca023a5-851b-4fec-9f0a-48cd83c2eaae',
  /** Order Method */
  side: 'bid' | 'ask',
  /** Order Type */
  ord_type: 'limit' | 'price' | 'market',
  /** Price */
  price: '3214215.0',
  /** Order Status */
  state: 'done',
  /** Market Unique ID */
  market: 'KRW-BTC',
  /** Order Created At */
  created_at: '2019-01-04T13:48:09+09:00',
  /** Order volume entered by the user. */
  volume: '1.0',
  /** Remaining Volume */
  remaining_volume: '0.0',
  /** Reserved Fee In This Order */
  reserved_fee: '0.0',
  /** Remaining Fee */
  remaining_fee: '0.0',
  /** Paid Fee */
  paid_fee: '6214.0',
  /** Using Fee In This Order */
  locked: '0.0',
  /** Completed Execution Volume */
  executed_volume: '1.0',
  /** The number of contracts on the order */
  trade_count: 1,
  /** The average price */
  avg_price: string;
}
```
