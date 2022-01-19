export interface JwtPaylaod {
  access_key: string;
  nonce: string;
  query_hash?: string;
  query_hash_alg?: string;
}
