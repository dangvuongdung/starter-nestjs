export interface IWalletModel {
  readonly id: number;
  readonly telegram_id: number;
  readonly address: string;
  readonly name: string;
  readonly priv_key: string;
}
