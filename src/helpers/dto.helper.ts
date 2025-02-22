import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class ParamId {
  @ApiProperty()
  @IsNumber()
  @Type(() => Number)
  id!: number;
}
