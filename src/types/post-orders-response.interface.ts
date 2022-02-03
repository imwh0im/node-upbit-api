import { GetOrdersResponse } from './get-orders-response.interface';

export type PostOrdersResponse = GetOrdersResponse & {
  /** Average Price */
  avg_price: string;
};
