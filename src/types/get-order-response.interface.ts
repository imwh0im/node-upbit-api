import { GetOrdersResponse } from './get-orders-response.interface';

interface Trade {
  /** Market Unique ID */
  market: string;
  /** Completed contract Unique ID */
  uuid: string;
  /** Completed Contract Price */
  price: string;
  /** Completed Contract Volume */
  volume: string;
  /** Completed Contract Total Price */
  funds: string;
  /** Order Method */
  side: string;
}

export interface GetOrderResponse extends GetOrdersResponse {
  /** completed contract */
  trades: Trade[];
}
