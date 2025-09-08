import { IUserRepository } from 'src/domain/interfaces/user/interface.user';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user';
import { User } from 'src/domain/entities/user';
import { FindUser } from 'src/application/dtos/user/interface.finduser';
import { UserInput } from 'src/application/dtos/user/interface.register';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class RegisterRepository implements IUserRepository {
  private AuthRepo: Repository<UserEntity>;
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {
    this.AuthRepo = this.repository;
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
  async findByPhone(data: FindUser): Promise<UserEntity | null> {
    console.log('this is repo phone find');
    const user = await this.AuthRepo.findOne({
      where: [{ phoneNumber: data.phoneNumber }, { email: data.email }],
    });
    console.log(user, 'this is resutl find user');

    return user;
  }
  async list(): Promise<UserInput[]> {
    const allUsers = await this.AuthRepo.find();
    console.log(allUsers, 'this is user');
    return allUsers;
  }
}
