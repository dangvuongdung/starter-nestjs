import { Injectable } from '@nestjs/common';
import { IUserRepository } from '@modules/user/user.repo';
import { IUserModel } from '@modules/user/domain/user.model';

@Injectable()
export class ListUserService {
  constructor(private readonly repository: IUserRepository) {}

  public async execute(): Promise<IUserModel[]> {
    return this.repository.listUser();
  }
}
