import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './domain/user.entity';
import { IUserModel } from './domain/user.model';

export interface IUserRepository {
  listUser(): Promise<IUserModel[]>;
}

export class UserRepositoryImpl implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}

  public async listUser(): Promise<IUserModel[]> {
    return this.user.find({});
  }
}
