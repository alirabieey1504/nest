import { Controller, Post, Body } from '@nestjs/common';
import { RegisterRequestDto } from '../dto/registerInput';
import { AuthService } from 'src/application/usecase/auth.usecase';
import { RegisterInput } from 'src/application/dtos/interface.register';

@Controller('auth')
export class UserController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async submitDataForRegister(@Body() dto: RegisterRequestDto) {
    console.log(dto, 'this is input');
    const input: RegisterInput = {
      firstName: dto.firstName,
      lastName: dto.lastName,
      password: dto.getPassword(),
      email: dto.email,
      phoneNumber: dto.phoneNumber,
    };
    const user = await this.authService.Register(input);
    console.log(user, 'this is req');
    return user;
  }
}
