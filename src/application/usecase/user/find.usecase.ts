import { Inject, Injectable } from '@nestjs/common';
import { FindUser } from 'src/application/dtos/user/interface.finduser';
import type { IUserRepository } from 'src/domain/interfaces/user/interface.user';
import { IUserRepositoryToken } from 'src/presentation/tokens/user.repository';
@Injectable()
export class FindUserService {
  constructor(
    @Inject(IUserRepositoryToken)
    private readonly RegisterRepo: IUserRepository,
  ) {}
  async findUser(data: FindUser): Promise<boolean> {
    console.log(data, 'this is data my');
    console.log(data.phoneNumber, 'this is phone');
    console.log('this is ff');
    const result = await this.RegisterRepo.findByPhone({
      phoneNumber: data.phoneNumber,
      email: data.email,
    });
    console.log(result, 'this is result');
    console.log('this is a test that work');
    if (result) return true;
    else return false;
  }
}
