import { OrderBy } from './order-by.interface';

type State = 'wait' | 'watch' | 'done' | 'cancel';

export type GetOrdersRequestQuery = {
  /** Market Unique ID */
  market: string;
  /** Order Unique ID */
  uuids: string[];
  /** User Custom ID */
  identifiers: string[];
  /** Order State */
  state?: State;
  /** Order State List */
  states: State[];
  /** paging */
  page?: number;
  /** Limit */
  limit?: number;
  /** Order By */
  order_by?: OrderBy;
};
