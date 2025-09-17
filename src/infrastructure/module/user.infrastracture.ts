import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { RegisterRepository } from 'src/infrastructure/repository/user.repository';
import { IUserRepositoryToken } from 'src/presentation/tokens/user.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: IUserRepositoryToken,
      useClass: RegisterRepository,
    },
  ],
  exports: [IUserRepositoryToken],
})
export class UserInfraModule {}
