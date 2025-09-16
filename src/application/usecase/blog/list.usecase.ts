import type { IBlogRepository } from 'src/domain/interfaces/blog/interface.blog';

export class ListBlogUseCase {
  constructor(private readonly BlogRepo: IBlogRepository) {}

  async execute(): Promise<any[]> {
    console.log('this is some applied');
    return await this.BlogRepo.listBlog();
  }
}
