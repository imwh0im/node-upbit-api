### Example
```typescript

const param = {
  /** required */
  /** Market Unique ID */
  market: 'KRW-BTC',
  /** required */
  /** Order Unique ID */
  uuids: [],
  /** required */
  /** User Custom ID */
  identifiers: [],
  /** optional */
  /** Order State */
  state: 'done';
  /** required */
  /** Order State List */
  states: ['done', 'cancel'];
  /** optional */
  /** paging */
  page: 1;
  /** optional */
  /** Limit */
  limit: 10;
  /** optional */
  /** Order By */
  order_by: 'desc';
};

// ES6
import ApiUpbit from 'node-upbit-api';

const res = await new ApiUpbit('accessKey', 'secretKey').getOrders(param);
console.log(res);

// ES5
var ApiUpbit = required('node-upbit-api');

new ApiUpbit('accessKey', 'secretKey').getOrders(param).then(res => console.log(res));

// console.log(res)
[
  {
    /** Order Unique ID */
    uuid: '9ca023a5-851b-4fec-9f0a-48cd83c2eaae',
    /** Order Method */
    side: 'ask',
    /** Order Type */
    ord_type: 'limit',
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
    /** completed contract */
  }
]
```

