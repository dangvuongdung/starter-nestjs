import { Controller, Get, HttpStatus, Inject, Response } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ListUserSymbol } from './list-user.provider'
import { ListUserService } from './list-user.service'
import { successResponse } from '@helpers/response.helper'

@ApiTags('users')
@Controller('users')
export class ListUserController {
    constructor(
        @Inject(ListUserSymbol)
        private service: ListUserService
    ) {}

    @ApiOperation({ summary: 'List users' })
    @ApiResponse({ status: HttpStatus.OK })
    @Get('/')
    public async listUsers(@Response() res) {
        const data = await this.service.execute()

        return successResponse('List user successful', data, res, HttpStatus.OK)
    }
}
