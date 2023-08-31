import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import * as path from 'path';
import * as process from 'process';

require('dotenv').config();

const _path = path.resolve(
  __dirname + '/../modules/**/domain/*.entity{.ts,.js}',
);

export const AppDataSource: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [_path],
  synchronize: false,
  migrations: ['dist/migration/*js'],
  schema: process.env.TYPEORM_SCHEMA,
  logging: process.env.TYPEORM_LOGGING === 'true',
};

module.exports = { AppDataSource };
