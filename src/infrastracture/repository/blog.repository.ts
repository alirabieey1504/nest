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
    console.log(blog, 'this is ');
    const createBlog = this.repository.create({
      title: blog.title,
      description: blog.description,
      authorId: blog.autherId,
      createdAt: blog.createdAt,
      countView: blog.countView,
    });
    const test = await this.repository.save(createBlog);
    console.log(test, 'this is test');
    return {
      mesage: 'htis sd',
    };
  }
}
