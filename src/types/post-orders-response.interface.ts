import { GetOrdersResponse } from './get-orders-response.interface';

export type PostOrdersResponse = GetOrdersResponse & {
  /** The average price */
  avg_price: string;
};
