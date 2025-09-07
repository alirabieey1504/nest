import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { RegisterService } from 'src/application/usecase/user/register.usecase';
// import { DataSource } from 'typeorm';
import { FindUserService } from 'src/application/usecase/user/find.usecase';
import { DatabaseModule } from 'src/infrastracture/database/database.module';
import { UserRepositoryProvider } from 'src/infrastracture/providers/user.repository.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [RegisterService, FindUserService, UserRepositoryProvider],
})
export class UserModule {}
