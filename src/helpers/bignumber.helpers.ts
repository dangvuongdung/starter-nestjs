import { ValueTransformer } from 'typeorm';
import BigNumber from 'bignumber.js';

export class BigNumberTransformer implements ValueTransformer {
  to(value: BigNumber): string {
    return value?.toString() ?? '0';
  }

  from(value: string): BigNumber {
    return new BigNumber(value);
  }
}
