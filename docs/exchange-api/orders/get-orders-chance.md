### Example
```typescript

const param = {
  /** required */
  /** KRW-{cryptoCurrenecyCode} */
  market: 'KRW-BTC',
};

// ES6
import ApiUpbit from 'node-upbit-api';

const res = await new ApiUpbit('accessKey', 'secretKey').getOrdersChance(param);
console.log(res);

// ES5
var ApiUpbit = required('node-upbit-api');

new ApiUpbit('accessKey', 'secretKey').getOrdersChance(param).then(res => console.log(res));

// console.log(res)
{
  /** fee of the sell */
  bid_fee: '0.0025',
  /** fee of the buy */
  ask_fee: '0.0025',
  /** Information for of Market */
  market: {
    /** Market Unique ID */
    id: 'KRW-BTC',
    /** Market Name */
    name: 'BTC/KRW',
    /** Supported order type */
    order_types: [
      'limit'
    ],
    /** Supported order method */
    order_sides: [
      "ask",
      "bid"
    ],
    /** Restrictions for Sell */
    bid: {
      /** Currency string of UPPER CASE */
      currency: 'KRW',
      /** Order price unit. */
      price_unit: null,
      /** Minimum order price */
      min_total: '1000',
    }
    /** Restrictions for Buy */
    ask: {
      /** Currency string of UPPER CASE */
      currency: 'KRW',
      /** Order price unit. */
      price_unit: null,
      /** Minimum order price */
      min_total: '1000',
    }
    /** Maximum order price */
    max_total: '1000000',
    /** Market operations status. */
    state: 'active',
  };
  /** The account status of the currency used to buy. */
  bid_account: {
    /** Currency string of UPPER CASE */
    currency: 'KRW',
    /** orderable count/price */
    balance: '0.0',
    /** Tied up order count/price */
    locked: '0.0',
    /** Average price */
    avg_buy_price: '0',
    /** Whether It modified average price */
    avg_buy_price_modified: false,
    /** Currency for of Average price */
    unit_currency: 'KRW',
  }
  /** The account status of the currency used to sell. */
  ask_account: {
    /** Currency string of UPPER CASE */
    currency: 'KRW',
    /** orderable count/price */
    balance: '0.0',
    /** Tied up order count/price */
    locked: '0.0',
    /** Average price */
    avg_buy_price: '0',
    /** Whether It modified average price */
    avg_buy_price_modified: false,
    /** Currency for of Average price */
    unit_currency: 'KRW',
  }
}
```
