import { Iuser } from 'src/domain/interfaces/interface.user';
import { userDto } from '../dtos/user';

export class userRepository implements Iuser {
  constructor() {}
  save(user: userDto): Promise<object> {
    return {
      userd: user,
    };
  }
}
