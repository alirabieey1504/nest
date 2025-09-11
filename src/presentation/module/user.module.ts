import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { RegisterService } from 'src/application/usecase/user/register.usecase';
import { FindUserService } from 'src/application/usecase/user/find.usecase';
import { ListService } from 'src/application/usecase/user/list.usecase';
import { UserInfraModule } from 'src/infrastracture/module/user.infrastracture';

@Module({
  imports: [UserInfraModule],
  controllers: [UserController],
  providers: [RegisterService, FindUserService, ListService],
})
export class UserModule {}
