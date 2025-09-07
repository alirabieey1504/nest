import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user';
import { CommentEntity } from '../entities/comments';

@Module({
  providers: [
    {
      provide: DataSource,
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'ali',
          password: 'postgres',
          database: 'blog',
          entities: [UserEntity, CommentEntity, CommentEntity],
          synchronize: true,
        });
        return dataSource.initialize();
      },
    },
  ],
  exports: [DataSource],
})
export class DatabaseModule {}
