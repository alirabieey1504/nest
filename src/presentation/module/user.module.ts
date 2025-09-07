import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/infrastracture/entities/user';
import { UserController } from '../controller/user.controller';
import { RegisterService } from 'src/application/usecase/user/register.usecase';
import { DataSource } from 'typeorm';
import { AuthRepository } from 'src/infrastracture/repository/user.repository';
import { FindUserService } from 'src/application/usecase/user/find.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    RegisterService,
    FindUserService,
    {
      provide: 'IUserRepository',
      useFactory: (dataSource: DataSource) => new AuthRepository(dataSource),
      inject: [DataSource],
    },
  ],
})
export class UserModule {}
