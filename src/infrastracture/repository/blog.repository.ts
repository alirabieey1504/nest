import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IBlogRepository } from 'src/domain/interfaces/blog/interface.blog';
import { BlogEntity } from '../entities/blog';
import { Repository } from 'typeorm';
import { Blog } from 'src/domain/entities/blog';

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
  async listBlog(): Promise<any[]> {
    return await this.repository.find();
  }
}
