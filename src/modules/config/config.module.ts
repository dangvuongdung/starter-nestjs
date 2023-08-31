import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Config } from './domain/config.entity'
import { ConfigRepositoryImpl } from './config.repo'
import { ListConfigController } from './use-cases/list-config/list-config.controller'
import { ListConfigProvider } from './use-cases/list-config/list-config.provider'

@Module({
    imports: [TypeOrmModule.forFeature([Config])],
    controllers: [ListConfigController],
    providers: [ConfigRepositoryImpl, ListConfigProvider],
})
export class ConfigsModule {}
