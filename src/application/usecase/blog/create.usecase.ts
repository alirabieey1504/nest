import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { blogDto } from 'src/application/dtos/blog/interface.create';
import { Blog } from 'src/domain/entities/blog';
import type { IBlogRepository } from 'src/domain/interfaces/blog/interface.blog';
import type { IUserRepository } from 'src/domain/interfaces/user/interface.user';
import { IBlogRepositoryToken } from 'src/presentation/tokens/blog.repository';
import { IUserRepositoryToken } from 'src/presentation/tokens/user.repository';
@Injectable()
export class CreateBlogUseCase {
  constructor(
    @Inject(IBlogRepositoryToken)
    private readonly BlogRepo: IBlogRepository,
    @Inject(IUserRepositoryToken)
    private readonly usersRepo: IUserRepository,
  ) {}

  async createBlog(data: blogDto): Promise<object> {
    const UserId = await this.usersRepo.findByPhone({
      phoneNumber: data.phoneNumber,
      email: data.email,
    });

    if (!UserId) {
      throw new NotFoundException('error 400 user not found');
    } else {
      const blog = new Blog(data.title, data.description, UserId);

      const result = await this.BlogRepo.createBlog(blog);
      return {
        result: result,
      };
    }
  }
}
