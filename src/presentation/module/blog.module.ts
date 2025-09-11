import { Module } from '@nestjs/common';
import { BlogController } from '../controller/blog.controller';
import { DatabaseModule } from 'src/infrastracture/database/database.module';
import { BlogService } from 'src/application/usecase/blog/create.usecase';
import { BlogRepository } from 'src/infrastracture/repository/blog.repository';
import { IBlogRepositoryToken } from '../tokens/blog.repository';
import { IUserRepositoryToken } from '../tokens/user.repository';
import { RegisterRepository } from 'src/infrastracture/repository/user.repository';
@Module({
  imports: [DatabaseModule],
  controllers: [BlogController],
  providers: [
    {
      provide: IBlogRepositoryToken,
      useClass: BlogRepository,
    },
    {
      provide: IUserRepositoryToken,
      useClass: RegisterRepository,
    },
    BlogService,
  ],
})
export class BlogModule {}
