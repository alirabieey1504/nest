import {
  Controller,
  Post,
  Body,
  Get,
  BadRequestException,
} from '@nestjs/common';
import { RegisterRequestDto } from '../dto/user/registerRequestDto';
import { RegisterService } from 'src/application/usecase/user/register.usecase';
import { UserInput } from 'src/application/dtos/user/interface.register';
import { ListService } from 'src/application/usecase/user/list.usecase';

@Controller('auth')
export class UserController {
  constructor(
    private readonly registerService: RegisterService,
    private readonly listService: ListService,
  ) {}
  @Post('register')
  async submitDataForRegister(@Body() dto: RegisterRequestDto) {
    try {
      console.log(dto, 'this is input');
      const input: UserInput = {
        firstName: dto.firstName,
        lastName: dto.lastName,
        password: dto.password,
        email: dto.email,
        phoneNumber: dto.phoneNumber,
        secretKey: dto.secretKey,
      };
      const user = await this.registerService.Register(input);
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
