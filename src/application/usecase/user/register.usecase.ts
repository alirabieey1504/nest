import type { IUserRepository } from 'src/domain/interfaces/interface.user';
import { User } from '../../../domain/entities/user';

import { RegisterInput } from '../../dtos/interface.register';
import { Inject, Injectable } from '@nestjs/common';
@Injectable()
export class RegisterService {
  constructor(
    @Inject('IUserRepository')
    private readonly AuthRepo: IUserRepository,
  ) {}

  async Register(input: RegisterInput): Promise<object> {
    try {
      const user = new User(
        input.firstName,
        input.lastName,
        input.password,
        input.email,
        input.phoneNumber,
        input.secretKey || '',
      );

      console.log(input, 'this is input');
      const test = await this.AuthRepo.save(user);
      console.log(test, 'this is a test');
      return test;
    } catch (error) {
      const err = error as Error;
      console.log(err.message, 'this is message?s');
      return {
        message: err.message,
        status: err.name,
      };
    }
  }
  async login() {}
}
