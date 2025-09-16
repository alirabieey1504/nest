import {
  Controller,
  Post,
  Body,
  Get,
  BadRequestException,
} from '@nestjs/common';
import { RegisterRequestDto } from '../dto/user/registerRequestDto';
import { RegisterService } from 'src/application/usecase/user/register.usecase';
import { ListUserUseCase } from 'src/application/usecase/user/list.usecase';

@Controller('auth')
export class UserController {
  constructor(
    private readonly registerService: RegisterService,
    private readonly listService: ListUserUseCase,
  ) {}
  @Post('register')
  async submitDataForRegister(@Body() dto: RegisterRequestDto) {
    try {
      const user = await this.registerService.Register(dto);
      console.log(user, 'this is req');
      return user;
    } catch (error) {
      throw new BadRequestException(`${error}`);
    }
  }
  @Get('list')
  async listUser() {
    const list = await this.listService.list();
    console.log(list);
    return list;
  }
}
