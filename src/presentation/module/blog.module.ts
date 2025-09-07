import { Module } from '@nestjs/common';
import { BlogController } from '../controller/blog.controller';
import { DatabaseModule } from 'src/infrastracture/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [BlogController],
  providers: [],
})
export class BlogModule {}
