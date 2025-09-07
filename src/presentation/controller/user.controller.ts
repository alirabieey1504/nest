import { Controller, Post, Body } from '@nestjs/common';
import { RegisterRequestDto } from '../dto/registerRequestDto';
import { RegisterService } from 'src/application/usecase/user/register.usecase';
import { RegisterInput } from 'src/application/dtos/interface.register';

@Controller('auth')
export class UserController {
  constructor(private readonly registerService: RegisterService) {}
  @Post('register')
  async submitDataForRegister(@Body() dto: RegisterRequestDto) {
    console.log(dto, 'this is input');
    const input: RegisterInput = {
      firstName: dto.firstName,
      lastName: dto.lastName,
      password: dto.password,
      email: dto.email,
      phoneNumber: dto.phoneNumber,
    };
    const user = await this.registerService.Register(input);
    console.log(user, 'this is req');
    return user;
  }
}
