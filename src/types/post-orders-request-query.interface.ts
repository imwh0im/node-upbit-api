import { OrderType } from './order-type.interface';
import { Side } from './side.interface';

export type PostOrdersRequestQuery = {
  /** Market Unique ID */
  market: string;
  /** Order Method */
  side: Side;
  /** Volume For Ask Order */
  volume: string;
  /** Price For Ask Order */
  price: string;
  /** Order Type */
  ord_type: OrderType;
  /** User Custom Value */
  identifier?: string;
};
