import { RegisterRepository } from 'src/infrastracture/repository/user.repository';
import { DataSource } from 'typeorm';

export const UserRepositoryProvider = {
  provide: 'IUserRepository',
  useFactory: (dataSource: DataSource) => new RegisterRepository(dataSource),
  inject: [DataSource],
};
