import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastracture/database/database.module';
import { BlogRepository } from 'src/infrastracture/repository/blog.repository';
import { RegisterRepository } from 'src/infrastracture/repository/user.repository';
import { IBlogRepositoryToken } from 'src/presentation/tokens/blog.repository';
import { IUserRepositoryToken } from 'src/presentation/tokens/user.repository';
@Module({
  imports: [DatabaseModule],

  providers: [
    {
      provide: IBlogRepositoryToken,
      useClass: BlogRepository,
    },
    {
      provide: IUserRepositoryToken,
      useClass: RegisterRepository,
    },
  ],
  exports: [IUserRepositoryToken, IBlogRepositoryToken],
})
export class BlogInfraModule {}
