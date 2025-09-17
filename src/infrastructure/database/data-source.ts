// src/data-source.ts
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user';
import { BlogEntity } from '../entities/blog';
import { CommentEntity } from '../entities/comments';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'ali',
  password: 'postgres',
  database: 'blog',
  entities: [UserEntity, BlogEntity, CommentEntity],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
