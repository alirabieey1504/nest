import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBlogUseCase } from 'src/application/usecase/blog/create.usecase';
import { CreateBlogDto } from '../dto/blog/CreateBlogDto';
import { ListBlogUseCase } from 'src/application/usecase/blog/list.usecase';
import { blogListDto } from 'src/application/repositoryDto/blog/blog.list.dto';

@Controller('blog')
export class BlogController {
  constructor(
    private readonly blogCreateService: CreateBlogUseCase,
    private readonly blogListService: ListBlogUseCase,
  ) {}
  @Post('create')
  async create(@Body() dto: CreateBlogDto) {
    console.log(dto, 'this is my dto');
    return await this.blogCreateService.createBlog(dto);
  }
  @Get('list')
  async list(): Promise<blogListDto[] | object> {
    console.log('this is log');
    return await this.blogListService.execute();
  }
}
