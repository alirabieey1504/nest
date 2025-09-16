import { Blog } from 'src/domain/entities/blog';

export interface IBlogRepository {
  createBlog(blog: Blog): Promise<object | undefined>;
  listBlog(): Promise<any[]>;
}
