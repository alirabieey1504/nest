import { UserInput } from 'src/application/dtos/interface.register';
import { User } from '../../entities/user';
import { FindUser } from 'src/application/dtos/interface.finduser';

export interface IUserRepository {
  save(user: User): Promise<object>;
  findByPhone(data: FindUser): Promise<boolean | undefined>;
  list(): Promise<UserInput[]>;
}
