import { randomUUID } from 'node:crypto';
import { comment } from './comment';

export class Blog {
  public comments: comment[];
  public readonly createdAt: Date;
  private id: string;
  public readonly countView: number = 0;

  constructor(
    public title: string,
    public description: string,
    public autherId: string,
  ) {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
