import { Provider } from '@nestjs/common'
import { ListUserService } from './list-user.service'
import { UserRepositoryImpl } from '@modules/user/user.repo'

export const ListUserSymbol = Symbol('ListUserSymbol')

export const ListUserProvider: Provider = {
    provide: ListUserSymbol,
    useFactory: (repo: UserRepositoryImpl): ListUserService => {
        return new ListUserService(repo)
    },
    inject: [UserRepositoryImpl],
}
