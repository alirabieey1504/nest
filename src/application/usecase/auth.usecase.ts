import { User } from '../../domain/entities/user';
import { Iuser } from '../../domain/interfaces/interface.user';
import { RegisterInput } from '../dtos/interface.register';
export class AuthService {
  constructor(private readonly repo: Iuser) {}

  async Register(input: RegisterInput): Promise<User> {
    const user = new User(
      input.fName,
      input.lName,
      input.password,
      input.email,
      input.phoneNumber,
      input.secretKey || '',
    );
    console.log(user, 'this is user');
    const test = await this.repo.save(user);
    console.log(test, 'this is a test');
    return user;
  }
  async login() {}
}
