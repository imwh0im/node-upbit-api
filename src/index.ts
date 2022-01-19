import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import * as qs from 'query-string';

import {
  GetAccountsResponse,
  GetOrdersChanceRequestBody,
  GetOrdersChanceResponse,
  JwtPaylaod,
} from '@types';
import axios, { AxiosResponse } from 'axios';
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

  private readonly UpbitHost = 'https://api.upbit.com/v1';

  /**
   * Show List of assets you have.
   * `/v1/accounts`
   * https://docs.upbit.com/reference/%EC%A0%84%EC%B2%B4-%EA%B3%84%EC%A2%8C-%EC%A1%B0%ED%9A%8C
   */
  public async getAccounts(): Promise<GetAccountsResponse[]> {
    const bearerToken = this.makeJwtToken();
    const res = <AxiosResponse<GetAccountsResponse[]>>await axios({
      method: 'GET',
      headers: {
        Authorization: bearerToken,
      },
      url: `${this.UpbitHost}/accounts`,
    });

    return res.data;
  }

  /**
   * Check the order availability information by market.
   * `/v1/orders/chance`
   * https://docs.upbit.com/reference/%EC%A3%BC%EB%AC%B8-%EA%B0%80%EB%8A%A5-%EC%A0%95%EB%B3%B4
   */
  public async getOrdersChance(
    market: string,
  ): Promise<GetOrdersChanceResponse> {
    const body: GetOrdersChanceRequestBody = {
      market: market,
    };
    const bearerToken = this.makeJwtToken(body);

    const res = <AxiosResponse<GetOrdersChanceResponse>>await axios({
      method: 'GET',
      url: `${this.UpbitHost}/orders/chance`,
      headers: {
        Authorization: bearerToken,
      },
      data: body,
    });

    return res.data;
  }

  /**
   * Seceret Key is JwtSecret
   */
  private readonly JwtSecret = this.SecretKey;

  /**
   * Return Request JWT TOKEN
   */
  private makeJwtToken(query?: Record<string, unknown>): string {
    const queryHash = this.makeQueryHash(query);

    const payload: JwtPaylaod = {
      access_key: this.AccessKey,
      nonce: uuidV4(),
      query_hash: queryHash,
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
}
