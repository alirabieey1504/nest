import { Module } from '@nestjs/common';
import { BlogController } from '../controller/blog.controller';
import { CreateBlogUseCase } from 'src/application/usecase/blog/create.usecase';
import { FindUserUseCase } from 'src/application/usecase/user/find.usecase';
import { BlogInfraModule } from 'src/infrastructure/module/blog.infrastracture';
import { ListBlogUseCase } from 'src/application/usecase/blog/list.usecase';
@Module({
  imports: [BlogInfraModule],
  controllers: [BlogController],
  providers: [CreateBlogUseCase, FindUserUseCase, ListBlogUseCase],
})
export class BlogModule {}
