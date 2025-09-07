import { IUserRepository } from 'src/domain/interfaces/user/interface.user';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entities/user';
import { User } from 'src/domain/entities/user';
import { FindUser } from 'src/application/dtos/interface.finduser';

export class RegisterRepository implements IUserRepository {
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
  async findByPhone(data: FindUser): Promise<boolean | undefined> {
    console.log('this is repo phone find');
    const user = await this.AuthRepo.findOne({
      where: [{ phoneNumber: data.phoneNumber }, { email: data.email }],
    });
    console.log(user, 'this is resutl find user');
    return !!user;
  }
}
