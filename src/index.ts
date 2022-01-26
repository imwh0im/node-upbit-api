import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import * as qs from 'query-string';

import {
  CancelOrderRequestQuery,
  CancelOrderResponse,
  GetAccountsResponse,
  GetOrderRequestQuery,
  GetOrderResponse,
  GetOrdersChanceRequestQuery,
  GetOrdersChanceResponse,
  GetOrdersRequestQuery,
  GetOrdersResponse,
  JwtPaylaod,
  PostOrdersRequestQuery,
  PostOrdersResponse,
} from './types';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { v4 as uuidV4 } from 'uuid';

/**
 * UPBIT API DOCUMENTS: https://docs.upbit.com/docs
 */
export class ApiUpbit {
  /**
   * UPBIT API Authorization Policy
   * Get Authroization Key: https://upbit.com/service_center/open_api_guide
   */
  constructor(
    private readonly AccessKey: string,
    private readonly SecretKey: string,
  ) {}

  /**
   * Upbit API HOST
   */
  private readonly UpbitHost = 'https://api.upbit.com/v1';

  /**
   * Seceret Key is JwtSecret
   */
  private readonly JwtSecret = this.SecretKey;

  /**
   * Show List of assets you have.
   * `GET /v1/accounts`
   * https://docs.upbit.com/reference/%EC%A0%84%EC%B2%B4-%EA%B3%84%EC%A2%8C-%EC%A1%B0%ED%9A%8C
   */
  public async getAccounts(): Promise<GetAccountsResponse[]> {
    return this.requestApi<GetAccountsResponse[]>('GET', '/accounts');
  }

  /**
   * Check the order availability information by market.
   * `GET /v1/orders/chance`
   * https://docs.upbit.com/reference/%EC%A3%BC%EB%AC%B8-%EA%B0%80%EB%8A%A5-%EC%A0%95%EB%B3%B4
   */
  public async getOrdersChance(
    query: GetOrdersChanceRequestQuery,
  ): Promise<GetOrdersChanceResponse> {
    return this.requestApi<GetOrdersChanceResponse>(
      'GET',
      '/orders/chance',
      query,
    );
  }

  /**
   * Inquire individual orders through the order UUID.
   * `GET /v1/order`
   * https://docs.upbit.com/reference/%EA%B0%9C%EB%B3%84-%EC%A3%BC%EB%AC%B8-%EC%A1%B0%ED%9A%8C
   */
  public async getOrder(
    query: GetOrderRequestQuery,
  ): Promise<GetOrderResponse> {
    if (Object.keys(query).length === 0) {
      throw new Error('Either value must be included.');
    }
    return this.requestApi<GetOrderResponse>('GET', '/order', query);
  }

  /**
   * Inquire the order list.
   * `GET /v1/orders`
   * https://docs.upbit.com/reference/%EC%A3%BC%EB%AC%B8-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EC%A1%B0%ED%9A%8C
   */
  public async getOrders(
    query: GetOrdersRequestQuery,
  ): Promise<GetOrdersResponse[]> {
    return this.requestApi<GetOrdersResponse[]>('GET', '/orders', query);
  }

  /**
   * Cancel Order
   * `DELETE /v1/order`
   * https://docs.upbit.com/reference/%EC%A3%BC%EB%AC%B8-%EC%B7%A8%EC%86%8C
   */
  public async cancelOrder(
    query: CancelOrderRequestQuery,
  ): Promise<CancelOrderResponse> {
    return this.requestApi<CancelOrderResponse>('DELETE', '/order', query);
  }

  /**
   * Request An Order
   * `POST /v1/orders`
   * https://docs.upbit.com/reference/%EC%A3%BC%EB%AC%B8%ED%95%98%EA%B8%B0
   */
  public async postOrders(
    query: PostOrdersRequestQuery,
  ): Promise<PostOrdersResponse> {
    return this.requestApi<PostOrdersResponse>('POST', '/orders', query);
  }

  /**
   * Return Request JWT TOKEN
   */
  private makeJwtToken(queryHash?: string): string {
    const payload: JwtPaylaod = {
      access_key: this.AccessKey,
      nonce: uuidV4(),
      query_hash: queryHash,
      query_hash_alg: queryHash && 'SHA512',
    };

    const jwtToken = jwt.sign(payload, this.JwtSecret);
    const authToken = `Bearer ${jwtToken}`;
    return authToken;
  }

  /**
   * Return Query Hash
   */
  private makeQueryHash(query?: Record<string, unknown>): string | undefined {
    if (!query) {
      return;
    }

    const queryString = qs.stringify(query);
    const hash = crypto.createHash('sha512');
    const queryHash = hash.update(queryString, 'utf-8').digest('hex');
    return queryHash;
  }

  /**
   * HTTP Request function
   */
  private async requestApi<T>(
    httpMethod: AxiosRequestConfig['method'],
    endpoint: string,
    query?: Record<string, unknown>,
  ): Promise<T> {
    const queryHash = this.makeQueryHash(query);
    const bearerToken = this.makeJwtToken(queryHash);

    const res = <AxiosResponse<T>>await axios({
      method: httpMethod,
      url: `${this.UpbitHost}${endpoint}${
        query ? `?${qs.stringify(query)}` : ''
      }`,
      headers: {
        Authorization: bearerToken,
      },
    });

    return res.data;
  }
}
