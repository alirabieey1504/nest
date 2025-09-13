import { Body, Controller, Post } from '@nestjs/common';
import { BlogService } from 'src/application/usecase/blog/create.usecase';
import { CreateBlogDto } from '../dto/blog/CreateBlogDto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @Post('create')
  async create(@Body() dto: CreateBlogDto) {
    console.log(dto, 'this is my dto');
    await this.blogService.createBlog(dto);
    console.log('this is a test');
  }
}
