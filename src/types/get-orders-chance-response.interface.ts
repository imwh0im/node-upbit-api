import { GetAccountsResponse } from './get-accounts-response.interface';

interface TransactionInfo {
  /** Currency string of UPPER CASE */
  currency: string;
  /** Order price unit. */
  price_unit: string;
  /** Minimum order price */
  min_total: number;
}

interface Market {
  /** Market Unique ID */
  id: string;
  /** Market Name */
  name: string;
  /** Supported order type */
  order_types: string[];
  /** Supported order method */
  order_sides: string[];
  /** Restrictions for Sell */
  bid: TransactionInfo;
  /** Restrictions for Buy */
  ask: TransactionInfo;
  /** Maximum order price */
  max_total: string;
  /** Market operations status. */
  state: string;
}

export interface GetOrdersChanceResponse {
  /** fee of the sell */
  bid_fee: string;
  /** fee of the buy */
  ask_fee: string;
  /** Information for of Market */
  market: Market;
  /** The account status of the currency used to buy. */
  bid_account: GetAccountsResponse;
  /** The account status of the currency used to sell. */
  ask_account: GetAccountsResponse;
}
