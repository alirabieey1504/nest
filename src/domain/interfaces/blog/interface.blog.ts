import { blogRepoDto } from 'src/application/repositoryDto/blog/blog.repository.dto';
// import { Blog } from 'src/domain/entities/blog';

export interface IBlogRepository {
  createBlog(blog: blogRepoDto): Promise<object | undefined>;
}
