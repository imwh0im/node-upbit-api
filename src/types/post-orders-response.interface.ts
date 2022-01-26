import { GetOrdersResponse } from './get-orders-response.interface';

export type PostOrdersResponse = GetOrdersResponse & { avg_price: string };
