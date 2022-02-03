<p align="center">
    <a href="https://www.npmjs.com/package/node-upbit-api">
        <img src="https://img.shields.io/npm/v/node-upbit-api.svg?style=flat-square&colorB=51C838" alt="NPM Version" />
    </a>
    <a href="https://github.com/semantic-release/semantic-release">
        <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" />
    </a>
</p>

# node-upbit-api
wrapper for upbit API

### Installation
  ```sh
  $ npm ci
  ```

### Build
  ```sh
  $ npm run build
  ```

### Lint
  ```sh
  $ npm run lint  # Only Check Lint
  $ npm run lint:fix  # Fix to Lint Error
  $ npm run format  # Check prettier
  ```

### How to Use
  ```typescript
  import ApiUpbit from 'node-upbit-api';

  new ApiUpbit('accessKey', 'secretKey').getAccounts().then((accounts) => {
    console.log(accounts);
  });
  ```

### Available API List
  - Exchange API
    - Assets
      - [x] `GET /v1/accounts`
        - [getAccounts](/docs/exchange-api/assets/get-accounts.md)
        - Show List of assets you have.
    - Orders
      - [x] `GET /v1/orders/chance`
        - [getOrdersChance](/docs/exchange-api/orders/get-orders-chance.md)
        - Check the order availability information by market.
      - [x] `GET /v1/order`
        - [getOrder](/docs/exchange-api/orders/get-order.md)
        - Inquire individual orders through the order UUID.
      - [x] `GET /v1/orders`
        - [getOrders](/docs/exchange-api/orders/get-orders.md)
        - Inquire the order list.
      - [x] `DELETE /v1/order`
        - [cancelOrder](/docs/exchange-api/orders/cancel-order.md)
        - Cancel Order
      - [x] `POST /v1/orders`
        - [postOrders](/docs/exchange-api/orders/post-orders.md)
        - Request An Order
    - Withdrawal
      - [ ] `GET /v1/withdraws`
      - [ ] `GET /v1/withdraw`
      - [ ] `GET /v1/withdraws/chance`
      - [ ] `POST /v1/withdraws/coin`
      - [ ] `POST /v1/withdraws/krw`
    - Deposit
      - [ ] `GET /v1/deposits`
      - [ ] `GET /v1/deposit`
      - [ ] `POST /v1/deposit/generate_coin_address`
      - [ ] `GET /v1/deposits/coin_addresses`
      - [ ] `GET /v1/deposits/coin_address`
      - [ ] `GET /v1/deposits/krw`
  - Quotation API
    - Coin List
      - [ ] `GET /v1/market/all`
    - Candle
      - [ ] `GET /v1/candles/minute/{unit}`
      - [ ] `GET /v1/candles/days`
      - [ ] `GET /v1/candles/weeks`
      - [ ] `GET /v1/candles/months`
    - Conclusion
      - [ ] `GET /v1/trades/ticks`
    - Ticker
      - [ ] `GET /v1/ticker`
    - Orderbook
      - [ ] `GET /v1/orderbook`
  - etc
    - [ ] `GET /v1/status/wallet`
    - [ ] `GET /v1/api_keys`

### Commit-message
  - The commit message accurately specifies the work scope.
  - The commit message refers to [semantic-release](https://github.com/semantic-release/semantic-release#how-does-it-work)
    - [Reference](https://www.conventionalcommits.org/ko/v1.0.0/)

#### Link
  - [Semantic-Release](https://github.com/semantic-release/semantic-release)
  - [Upbit API Documents](https://docs.upbit.com/)
