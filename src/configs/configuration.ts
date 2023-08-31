import * as process from 'process';

require('dotenv').config();

export default {
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  Auth: {
    Secret: process.env.JWT_SECRET || 'abc123',
    AccessTokenExpireIn: Number(process.env.ACCESS_TOKEN_EXPIRE_IN || 600),
    RefreshTokenExpireIn: Number(process.env.REFRESH_TOKEN_EXPIRE_IN || 86400),
    LoginValidIn: Number(process.env.LOGIN_VALID_IN_SECONDS || 60),
  },
  ChainId: Number(process.env.CHAIN_ID || 0),
};
