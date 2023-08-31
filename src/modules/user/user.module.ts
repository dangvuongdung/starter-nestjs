import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user.entity';
import { UserRepositoryImpl } from './user.repo';
import { ListUserController } from './use-cases/list-user/list-user.controller';
import { ListUserProvider } from './use-cases/list-user/list-user.provider';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ListUserController],
  providers: [UserRepositoryImpl, ListUserProvider],
})
export class UserModule {}
