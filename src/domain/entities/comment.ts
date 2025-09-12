import { randomUUID } from 'node:crypto';

export class comment {
  public comments: comment[] = [];
  public depth: number = 0;
  private readonly id: string;
  constructor(
    public readonly userId: string,
    public readonly text: string,
    public readonly createdAt: string,
    public blogId: string,
  ) {
    this.id = randomUUID();
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
