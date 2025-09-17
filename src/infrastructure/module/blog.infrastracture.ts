import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { BlogRepository } from 'src/infrastructure/repository/blog.repository';
import { RegisterRepository } from 'src/infrastructure/repository/user.repository';
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
