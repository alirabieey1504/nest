import { Module } from '@nestjs/common';
import { CommentController } from '../controller/comment.controller';
import { DatabaseModule } from 'src/infrastracture/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [CommentController],
  providers: [],
})
export class CommentModule {}
