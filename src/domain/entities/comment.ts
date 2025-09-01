import { blog } from './blog';
import { User, Role } from './user';

export class comment {
  public comments: comment[] = [];
  public depth: number = 0;
  constructor(
    public readonly user: User,
    public readonly text: string,
    public readonly createdAt: string,
    public blog: blog,
  ) {}
  get userRole(): Role {
    return this.user.getRole();
  }
  addComments(newComment: comment) {
    if (this.depth > 3) {
      throw new Error('can not add comment');
    } else {
      this.depth = this.depth + 1;
      this.comments.push(newComment);
    }
  }
}
