import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IBlogRepository } from 'src/domain/interfaces/blog/interface.blog';
import { BlogEntity } from '../entities/blog';
import { Repository } from 'typeorm';
import { Blog } from 'src/domain/entities/blog';
import { blogListDto } from 'src/application/repositoryDto/blog/blog.list.dto';

@Injectable()
export class BlogRepository implements IBlogRepository {
  constructor(
    @InjectRepository(BlogEntity)
    private readonly repository: Repository<BlogEntity>,
  ) {}
  async createBlog(blog: Blog): Promise<object | undefined> {
    try {
      console.log(blog, 'this is ');
      const id = blog.getId();
      const createBlog = this.repository.create({
        id: id,
        title: blog.title,
        description: blog.description,
        authorId: blog.authorId,
        createdAt: blog.createdAt,
        countView: blog.countView,
      });
      await this.repository.save(createBlog);
      return {
        message: 'blog creation  was successfully',
      };
    } catch (error) {
      return {
        message: `${error}`,
      };
    }
  }
  async listBlog(): Promise<blogListDto[] | object> {
    try {
      const blogList = await this.repository.find({
        select: {
          title: true,
          description: true,
          author: { firstName: true, lastName: true },
        },
        relations: { author: true },
      });
      if (blogList.length == 0) throw new NotFoundException('not found blog');
      return blogList;
    } catch (error) {
      console.log(error);
      return { message: 'error 500' };
    }
  }
}
