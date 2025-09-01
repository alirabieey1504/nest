import { Controller, Post, Body } from '@nestjs/common';
import type { RegisterInput } from 'src/application/dtos/interface.register';
import { AuthService } from 'src/application/usecase/auth.usecase';

@Controller('auth')
export class UserController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async submitDataForRegister(@Body() input: RegisterInput) {
    console.log(input, 'this is input');
    const user = await this.authService.Register(input);
    console.log(user, 'this is req');
    return user;
  }
}
