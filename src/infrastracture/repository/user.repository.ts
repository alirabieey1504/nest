import { IuserRepository } from 'src/domain/interfaces/interface.user';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entities/user';
import { User } from 'src/domain/entities/user';

export class AuthRepository implements IuserRepository {
  private AuthRepo: Repository<UserEntity>;
  constructor(private readonly dataSource: DataSource) {
    this.AuthRepo = this.dataSource.getRepository(UserEntity);
  }

  async save(user: User): Promise<UserEntity> {
    console.log('this is ffff');

    const saveUser = this.AuthRepo.create({
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.GetPassword,
      email: user.GetEmail,
      phoneNumber: user.GetPhoneNumber,
      secretKey: user.GetSecretKey || '',
    });
    console.log(saveUser, 'this is co');
    return await this.AuthRepo.save(saveUser);
  }
}
