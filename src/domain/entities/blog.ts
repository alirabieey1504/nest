import { comment } from './comment';
import { User } from './user';

export class blog {
  constructor(
    public title: string,
    public description: string,
    public readonly createdAt: string,
    public readonly author: User,
    public readonly countView: number,
    public comments: comment[],
  ) {}
}
