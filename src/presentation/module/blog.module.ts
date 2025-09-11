import { Module } from '@nestjs/common';
import { BlogController } from '../controller/blog.controller';
import { BlogService } from 'src/application/usecase/blog/create.usecase';
import { FindUserService } from 'src/application/usecase/user/find.usecase';
import { BlogInfraModule } from 'src/infrastracture/module/blog.infrastracture';
@Module({
  imports: [BlogInfraModule],
  controllers: [BlogController],
  providers: [BlogService, FindUserService],
})
export class BlogModule {}
