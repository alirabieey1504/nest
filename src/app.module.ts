import { Module } from '@nestjs/common';
import { UserModule } from './presentation/module/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './presentation/module/blog.module';
import { CommentModule } from './presentation/module/comment.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ali',
      password: 'postgres',
      database: 'viler',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    BlogModule,
    CommentModule,
  ],
})
export class AppModule {}
