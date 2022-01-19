export interface GetOrdersResponse {
  /** Order Unique ID */
  uuid: string;
  /** Order Method */
  side: string;
  /** Order Type */
  ord_type: string;
  /** Price */
  price: string;
  /** Order Status */
  state: string;
  /** Market Unique ID */
  market: string;
  /** Order Created At */
  created_at: string;
  /** Order volume entered by the user. */
  volume: string;
  /** Remaining Volume */
  remaining_volume: string;
  /** Reserved Fee In This Order */
  reserved_fee: string;
  /** Remaining Fee */
  remaining_fee: string;
  /** Paid Fee */
  paid_fee: string;
  /** Using Fee In This Order */
  locked: string;
  /** Completed Execution Volume */
  executed_volume: string;
  /** The number of contracts on the order */
  trades_count: number;
}
