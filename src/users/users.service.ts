import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [];
  }
  findUserById(id: number) {
    return {
      id,
      name: 'amir',
      username: 'alir',
    };
  }
  findUserByUserName(username: string) {
    return {
      id: 1,
      name: 'ali',
      username,
    };
  }
}
