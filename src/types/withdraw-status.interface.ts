export type WithdrawState =
  | 'submitting'
  | 'submitted'
  | 'almost_accepted'
  | 'rejected'
  | 'accepted'
  | 'processing'
  | 'done'
  | 'canceled';
