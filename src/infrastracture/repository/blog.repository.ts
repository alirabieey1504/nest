import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { blogRepoDto } from 'src/application/repositoryDto/blog/blog.repository.dto';
import { IBlogRepository } from 'src/domain/interfaces/blog/interface.blog';
import { BlogEntity } from '../entities/blog';
import { Repository } from 'typeorm';

@Injectable()
export class BlogRepository implements IBlogRepository {
  constructor(
    @InjectRepository(BlogEntity)
    private readonly repository: Repository<BlogEntity>,
  ) {}
  async createBlog(blog: blogRepoDto): Promise<object | undefined> {
    console.log(blog, 'this is ');
    const createBlog = this.repository.create({
      title: blog.title,
      description: blog.description,
      authorId: blog.authorId,
    });
    await this.repository.save(createBlog);
    return {
      mesage: 'htis sd',
    };
  }
}
