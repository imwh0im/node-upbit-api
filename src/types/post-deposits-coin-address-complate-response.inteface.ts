export type PostDepositsCoinAddressComplateResponse = {
  /** Crypto Currnecy Code */
  currency: string;
  /** Currnecy Deposit Address */
  deposit_address: string;
  /** Currency Deposit Secondary Address */
  secondary_address?: string;
};
