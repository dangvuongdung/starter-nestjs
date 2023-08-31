import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './configs/data-source';
import { UserModule } from '@modules/user/user.module';
import { ConfigsModule } from '@modules/config/config.module';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN,
    }),
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    TypeOrmModule.forRoot(AppDataSource),
    ConfigsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
