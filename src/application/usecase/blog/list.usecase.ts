import { Inject, Injectable } from '@nestjs/common';
import { blogListDto } from 'src/application/repositoryDto/blog/blog.list.dto';
import type { IBlogRepository } from 'src/domain/interfaces/blog/interface.blog';
import { IBlogRepositoryToken } from 'src/presentation/tokens/blog.repository';
@Injectable()
export class ListBlogUseCase {
  constructor(
    @Inject(IBlogRepositoryToken)
    private readonly BlogRepo: IBlogRepository,
  ) {}

  async execute(): Promise<blogListDto[] | object> {
    console.log('this is some applied');
    return await this.BlogRepo.listBlog();
  }
}
