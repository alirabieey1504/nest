import type { IUserRepository } from 'src/domain/interfaces/user/interface.user';
import { User } from '../../../domain/entities/user';

import { UserInput } from '../../dtos/user/interface.register';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { FindUserUseCase } from './find.usecase';
import { IUserRepositoryToken } from 'src/presentation/tokens/user.repository';
import { error } from 'console';
@Injectable()
export class RegisterService {
  constructor(
    @Inject(IUserRepositoryToken)
    private readonly RegisterRepo: IUserRepository,
    private readonly findUserService: FindUserUseCase,
  ) {}

  async Register(input: UserInput): Promise<object> {
    const resutFindUser = await this.findUserService.findUser({
      phoneNumber: input.phoneNumber,
      email: input.email,
    });
    console.log(resutFindUser, 'this is resutl find');
    if (resutFindUser == true) {
      throw new HttpException(
        'user with this email or phoneNumber already exist ',
        HttpStatus.CONFLICT,
      );
    } else {
      const user = new User(
        input.firstName,
        input.lastName,
        input.password,
        input.email,
        input.phoneNumber,
        input.secretKey || '',
      );
      console.log('this is r', user);
      if (!user) throw new error();
      console.log(input, 'this is input');
      const test = await this.RegisterRepo.save(user);
      console.log(test, 'this is a test');
      return test;
    }
  }
  async login() {}
}
