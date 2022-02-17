import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import * as qs from 'query-string';

import {
  CancelOrderRequestQuery,
  CancelOrderResponse,
  GetAccountsResponse,
  GetDepositCoinAddressesResponst,
  GetDepositRequstQuery,
  GetDepositResponse,
  GetDepositsRequestQuery,
  GetDepositsResponse,
  GetOrderRequestQuery,
  GetOrderResponse,
  GetOrdersChanceRequestQuery,
  GetOrdersChanceResponse,
  GetOrdersRequestQuery,
  GetOrdersResponse,
  GetWithdrawRequestQuery,
  GetWithdrawResponse,
  GetWithdrawsChanceRequestQuery,
  GetWithdrawsChanceResponse,
  GetWithdrawsRequestQuery,
  GetWithdrawsResponse,
  JwtPaylaod,
  PostDepositCoinAddressResponse,
  PostDepositsCoinAddressRequestBody,
  PostOrdersRequestQuery,
  PostOrdersResponse,
  PostWithdrawsCoinRequestBody,
  PostWithdrawsCoinResponse,
  PostWithdrawsKrwRequestbody,
  PostWithdrawsKrwResponse,
} from './types';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { v4 as uuidV4 } from 'uuid';

/**
 * UPBIT API DOCUMENTS: https://docs.upbit.com/docs
 */
export default class ApiUpbit {
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
   * Withdraws List
   * `GET /v1/withdraws`
   * https://docs.upbit.com/reference/%EC%A0%84%EC%B2%B4-%EC%B6%9C%EA%B8%88-%EC%A1%B0%ED%9A%8C
   */
  public async getWithdraws(
    query: GetWithdrawsRequestQuery,
  ): Promise<GetWithdrawsResponse> {
    return this.requestApi<GetWithdrawsResponse>('GET', '/withdraws', query);
  }

  /** Withdraw Detail
   * `GET /v1/withdraw`
   * https://docs.upbit.com/reference/%EA%B0%9C%EB%B3%84-%EC%B6%9C%EA%B8%88-%EC%A1%B0%ED%9A%8C
   */
  public async getWithdraw(
    query: GetWithdrawRequestQuery,
  ): Promise<GetWithdrawResponse> {
    if (query.txid && query.uuid) {
      throw new Error('Either (uuid, txid) value must be included.');
    }
    return this.requestApi<GetWithdrawResponse>('GET', '/withdraw', query);
  }

  /**
   * Check the possible withdrawal information of the Currency
   * `GET /v1/withdraw/chance`
   * https://docs.upbit.com/reference/%EC%B6%9C%EA%B8%88-%EA%B0%80%EB%8A%A5-%EC%A0%95%EB%B3%B4
   */
  public async getWithdrawsChance(
    query: GetWithdrawsChanceRequestQuery,
  ): Promise<GetWithdrawsChanceResponse> {
    return this.requestApi<GetWithdrawsChanceResponse>(
      'GET',
      '/withdraws/chance',
      query,
    );
  }

  /**
   * Request an Withdraw Coin
   * `POST /v1/withdraws/coin`
   * https://docs.upbit.com/reference/%EC%BD%94%EC%9D%B8-%EC%B6%9C%EA%B8%88%ED%95%98%EA%B8%B0
   */
  public async postWithdrawsCoin(
    body: PostWithdrawsCoinRequestBody,
  ): Promise<PostWithdrawsCoinResponse> {
    return this.requestApi<PostWithdrawsCoinResponse>(
      'POST',
      '/withdraws/coin',
      body,
    );
  }

  /**
   * Request an Withdraw Krw
   * `POST /v1/withdraws/krw`
   * https://docs.upbit.com/reference/%EC%9B%90%ED%99%94-%EC%B6%9C%EA%B8%88%ED%95%98%EA%B8%B0
   */
  public async postWithdrawsKrw(
    body: PostWithdrawsKrwRequestbody,
  ): Promise<PostWithdrawsKrwResponse> {
    return this.requestApi<PostWithdrawsKrwResponse>(
      'POST',
      '/v1/withdraws/krw',
      body,
    );
  }

  /**
   * Deposits List
   * `GET /v1/deposits`
   * https://docs.upbit.com/reference/%EC%9E%85%EA%B8%88-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EC%A1%B0%ED%9A%8C
   */
  public async getDeposits(
    query: GetDepositsRequestQuery,
  ): Promise<GetDepositsResponse> {
    return this.requestApi<GetDepositsResponse>('GET', '/v1/deposits', query);
  }

  /**
   * Deposit Detail
   * `GET /v1/deposit`
   * https://docs.upbit.com/reference/%EA%B0%9C%EB%B3%84-%EC%9E%85%EA%B8%88-%EC%A1%B0%ED%9A%8C
   */
  public async getDeposit(
    query: GetDepositRequstQuery,
  ): Promise<GetDepositResponse> {
    return this.requestApi<GetDepositResponse>('GET', '/v1/deposit', query);
  }

  /**
   * Request an Deposit Address
   * The creation of deposit addresses is asynchronous on the server.
   * When requesting to issue an address, <PostDepositsCoinAddressPendingResponse> will be returned as a result, and <PostDepositsCoinAddressPendingResponse> will continue to be returned until the address issuance is completed.
   */
  public async postDepositCoinAddress(
    body: PostDepositsCoinAddressRequestBody,
  ): Promise<PostDepositCoinAddressResponse> {
    return this.requestApi<PostDepositCoinAddressResponse>(
      'POST',
      '/v1/deposits/generate_coin_address',
      body,
    );
  }

  /**
   * Shows the List of Assets You Have.
   */
  public async getDepositCoinAddresses(): Promise<GetDepositCoinAddressesResponst> {
    return this.requestApi<GetDepositCoinAddressesResponst>(
      'GET',
      '/v1/deposits/coin_addresses',
    );
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
