import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import * as qs from 'query-string';

import { JwtPaylaod } from '@types';
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
  ) {
    if (!ApiUpbit.instance) {
      ApiUpbit.instance = this;
    }
    return ApiUpbit.instance;
  }

  /**
   * For Singleton Pattern
   */
  private static instance: ApiUpbit;

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
