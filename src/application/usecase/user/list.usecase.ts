import { UserInput } from 'src/application/dtos/user/interface.register';
import type { IUserRepository } from 'src/domain/interfaces/user/interface.user';
import { IUserRepositoryToken } from 'src/presentation/tokens/user.repository';
import { Inject } from '@nestjs/common';
export class ListUserUseCase {
  constructor(
    @Inject(IUserRepositoryToken)
    private readonly RegisterRepo: IUserRepository,
  ) {}
  async list(): Promise<UserInput[]> {
    console.log('this is list work');
    const users = await this.RegisterRepo.list();
    return users;
  }
}
