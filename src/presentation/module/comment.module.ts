import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentDto } from 'src/infrastracture/entities/comments';
import { CommentController } from '../controller/comment.controller';
@Module({
  imports: [TypeOrmModule.forFeature([CommentDto])],
  controllers: [CommentController],
  providers: [],
})
export class CommentModule {}
