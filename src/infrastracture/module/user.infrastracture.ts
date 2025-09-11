import { Module } from '@nestjs/common';
// import { DataSource } from 'typeorm';
import { DatabaseModule } from 'src/infrastracture/database/database.module';
import { RegisterRepository } from 'src/infrastracture/repository/user.repository';
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
