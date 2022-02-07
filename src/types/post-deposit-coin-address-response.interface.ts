import { PostDepositsCoinAddressComplateResponse } from './post-deposits-coin-address-complate-response.inteface';
import { PostDepositsCoinAddressPendingResponse } from './post-deposits-coin-address-pending-response.interface';

export type PostDepositCoinAddressResponse =
  | PostDepositsCoinAddressComplateResponse
  | PostDepositsCoinAddressPendingResponse;
