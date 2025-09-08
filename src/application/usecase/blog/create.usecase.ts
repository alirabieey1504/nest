import { blogDto } from 'src/application/dtos/blog/interface.create';
// import { Blog } from 'src/domain/entities/blog';
import { IBlogRepository } from 'src/domain/interfaces/blog/interface.blog';
import { IUserRepository } from 'src/domain/interfaces/user/interface.user';

export class CreateBlogService {
  constructor(
    private readonly BlogRepo: IBlogRepository,
    private readonly usersRepo: IUserRepository,
  ) {}

  async createBlog(data: blogDto): Promise<object> {
    console.log('this is createBlog');
    console.log(data, 'this is test');
    const myUser = await this.usersRepo.findByPhone({
      phoneNumber: data.phoneNumber,
      email: data.email,
    });
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
      const blog = await this.BlogRepo.createBlog();
      return blog;
    }
  }
}
