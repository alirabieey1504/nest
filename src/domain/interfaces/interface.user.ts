import { User } from '../entities/user';

export interface IuserRepository {
  save(user: User): Promise<object>;
}
