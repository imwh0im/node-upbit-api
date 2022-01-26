# upbitjs
wrapper for upbit API

### Installation
  ```sh
  $ npm run ci
  ```

### Build
  ```sh
  $ npm run build
  ```

### Lint
  ```bash
  $ npm run lint  # Only Check Lint
  $ npm run lint:fix  # Fix to Lint Error
  $ npm run foramt  # Check prettier
  ```

### Available API List
  - Exchange API
    - Assets
      - [x] `GET /v1/accounts`
        - [getAccounts]()
        - Show List of assets you have.
    - Orders
      - [x] `GET /v1/orders/chance`
        - [getOrdersChance]()
        - Check the order availability information by market.
      - [x] `GET /v1/order`
        - [getOrder]()
        - Inquire individual orders through the order UUID.
      - [x] `GET /v1/orders`
        - [getOrders]()
        - Inquire the order list.
      - [x] `DELETE /v1/order`
        - [cancelOrder]()
        - Cancel Order
      - [x] `POST /v1/orders`
        - [postORders]()
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
  - [Semantic-Release](https://github.com/semantic-release/semantic-release#how-does-it-work)
  - [Upbit API Documents](https://docs.upbit.com/)
  - [AWS ElasticBeanstalk](https://ap-northeast-2.console.aws.amazon.com/elasticbeanstalk/home?region=ap-northeast-2#/application/overview?applicationName=woodstock-web-api)

