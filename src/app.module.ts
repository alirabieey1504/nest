import { Module } from '@nestjs/common';
import { UserModule } from './presentation/module/user.module';
import { BlogModule } from './presentation/module/blog.module';
import { CommentModule } from './presentation/module/comment.module';
@Module({
  imports: [UserModule, BlogModule, CommentModule],
})
export class AppModule {}
