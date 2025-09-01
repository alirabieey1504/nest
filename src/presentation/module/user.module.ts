import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/infrastracture/entities/user';
import { UserController } from '../controller/user.controller';
import { AuthService } from 'src/application/usecase/auth.usecase';
import { DataSource } from 'typeorm';
import { AuthRepository } from 'src/infrastracture/repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    AuthService,
    {
      provide: 'IuserRepository',
      useFactory: (dataSource: DataSource) => new AuthRepository(dataSource),
      inject: [DataSource],
    },
  ],
})
export class UserModule {}
