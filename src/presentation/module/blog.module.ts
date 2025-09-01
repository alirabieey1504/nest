import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogDto } from 'src/infrastracture/entities/blog';
import { BlogController } from '../controller/blog.controller';
@Module({
  imports: [TypeOrmModule.forFeature([BlogDto])],
  controllers: [BlogController],
  providers: [],
})
export class BlogModule {}
