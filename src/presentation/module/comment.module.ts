import { Module } from '@nestjs/common';
import { CommentController } from '../controller/comment.controller';
import { CommentInfraModule } from 'src/infrastracture/module/comment.infrastracture';
@Module({
  imports: [CommentInfraModule],
  controllers: [CommentController],
  providers: [],
})
export class CommentModule {}
