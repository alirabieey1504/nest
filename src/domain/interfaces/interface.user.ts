import { User } from '../entities/user';

export class Iuser {
  save(this: void, user: User): Promise<object>;
}
