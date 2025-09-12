import { UserInput } from 'src/application/dtos/user/interface.register';
import { User } from '../../entities/user';
import { FindUser } from 'src/application/dtos/user/interface.finduser';

export interface IUserRepository {
  save(user: User): Promise<object>;
  findByPhone(data: FindUser): Promise<string | undefined>;
  list(): Promise<UserInput[]>;
}
