export interface GetAccountsResponse {
  /** Currency string of UPPER CASE */
  currency: string;
  /** orderable count/price */
  balance: string;
  /** Tied up order count/price */
  locked: string;
  /** Average price */
  avg_buy_price: string;
  /** Whether It modified average price */
  avg_buy_price_modified: boolean;
  /** Currency for of Average price */
  unit_currency: string;
}
