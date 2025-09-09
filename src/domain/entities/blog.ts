import { randomUUID } from 'node:crypto';
import { comment } from './comment';
import { UserInput } from 'src/application/dtos/user/interface.register';

export class Blog {
  public comments: comment[];
  public readonly createdAt: Date;
  private id: string;
  public readonly countView: number;

  constructor(
    public title: string,
    public description: string,
    public author: UserInput,
  ) {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
