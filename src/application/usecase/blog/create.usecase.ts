import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { blogDto } from 'src/application/dtos/blog/interface.create';
import { blogRepoDto } from 'src/application/repositoryDto/blog/blog.repository.dto';
import { Blog } from 'src/domain/entities/blog';
import type { IBlogRepository } from 'src/domain/interfaces/blog/interface.blog';
import type { IUserRepository } from 'src/domain/interfaces/user/interface.user';
import { IBlogRepositoryToken } from 'src/presentation/tokens/blog.repository';
import { IUserRepositoryToken } from 'src/presentation/tokens/user.repository';
@Injectable()
export class BlogService {
  constructor(
    @Inject(IBlogRepositoryToken)
    private readonly BlogRepo: IBlogRepository,
    @Inject(IUserRepositoryToken)
    private readonly usersRepo: IUserRepository,
  ) {}

  createBlogMapper(blog: Blog): blogRepoDto {
    return {
      title: blog.title,
      description: blog.description,
      authorId: blog.autherId,
    };
  }
  async createBlog(data: blogDto): Promise<object> {
    console.log('this is createBlog');
    console.log(data, 'this is test');
    const UserId = await this.usersRepo.findByPhone({
      phoneNumber: data.phoneNumber,
      email: data.email,
    });

    console.log(UserId, 'this is userfffffffffffffffffff');
    // const newBlog = new Blog({
    //   title: data.title,
    //   description: data.description,
    //   author: User,
    // });
    if (!UserId) {
      throw new BadRequestException('error 404 user not found');
    } else {
      console.log('hello my namme');

      const blog = new Blog(data.title, data.description, UserId);
      console.log(blog, 'this is blog');
      // console.log(lb, 'this is new blog');
      const blogMapper = this.createBlogMapper(blog);
      const result = await this.BlogRepo.createBlog(blogMapper);

      return {
        message: 'this is success',
        result: result,
      };
    }
  }
}
