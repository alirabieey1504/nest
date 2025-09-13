import { Module } from '@nestjs/common';
import { UserEntity } from '../entities/user';
import { CommentEntity } from '../entities/comments';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from '../entities/blog';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ali',
      password: 'postgres',
      database: 'blog',
      entities: [UserEntity, CommentEntity, BlogEntity],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([UserEntity, CommentEntity, BlogEntity]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
