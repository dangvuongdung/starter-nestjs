import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository, UpdateResult } from 'typeorm';
import { Config } from './domain/config.entity';
import { IConfigModel } from './domain/config.model';
import { ListConfigPayload } from './domain/payload/list-config.payload';
import { ConfigKey } from './config.enum';

export interface IConfigRepository {
  listConfig(payload: ListConfigPayload): Promise<IConfigModel[]>;
  getConfig(key: ConfigKey): Promise<IConfigModel>;
  updateConfig(key: ConfigKey, value: string): Promise<UpdateResult>;
}

export class ConfigRepositoryImpl implements IConfigRepository {
  constructor(
    @InjectRepository(Config)
    private readonly config: Repository<Config>,
  ) {}

  public async listConfig(payload: ListConfigPayload): Promise<IConfigModel[]> {
    const { search } = payload;

    const where = {} as any;

    if (search) where.key = Like(`%${search.trim().toLowerCase()}%`);

    return this.config.find({ where: where || {} });
  }

  public async getConfig(key: ConfigKey): Promise<IConfigModel> {
    return this.config.findOne({ where: { key } });
  }

  public async updateConfig(
    key: ConfigKey,
    value: string,
  ): Promise<UpdateResult> {
    return this.config.update({ key }, { value });
  }
}
