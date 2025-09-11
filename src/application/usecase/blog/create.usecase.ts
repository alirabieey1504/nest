import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { blogDto } from 'src/application/dtos/blog/interface.create';
// import { Blog } from 'src/domain/entities/blog';
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

  async createBlog(data: blogDto): Promise<object> {
    console.log('this is createBlog');
    console.log(data, 'this is test');
    const myUser = await this.usersRepo.findByPhone({
      phoneNumber: data.phoneNumber,
      email: data.email,
    });
    if (!myUser) throw new BadRequestException('error 404 user not found');

    console.log(myUser, 'this is user');
    // const newBlog = new Blog({
    //   title: data.title,
    //   description: data.description,
    //   author: User,
    // });
    if (!myUser) {
      throw new Error('user not found');
    } else {
      console.log(myUser, 'this is usr');
      // const lb = new Blog(data.title, data.description, myUser);
      // console.log(lb, 'this is new blog');
      return await this.BlogRepo.createBlog();
    }
  }
}
