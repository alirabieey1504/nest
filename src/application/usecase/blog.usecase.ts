import { IBlogRepository } from 'src/domain/interfaces/blog/interface.blog';

export class blog {
  constructor(private readonly BlogRepo: IBlogRepository) {}

  async createBlog(): Promise<object> {
    console.log('this is createBlog');
    const blog = await this.BlogRepo.createBlog();
    return blog;
  }
}
