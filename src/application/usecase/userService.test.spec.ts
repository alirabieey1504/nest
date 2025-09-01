import { Iuser } from '../../domain/interfaces/interface.user';
import { AuthService } from './auth.usecase';
const userRepoMock: Iuser = {
  save: jest.fn().mockResolvedValue(async () => Promise.resolve({})),
};

const authService = new AuthService(userRepoMock);

it('should register a user without touching DB', async () => {
  const user = await authService.Register({
    fName: 'Ali',
    lName: 'Rabiee',
    password: 'alirabE2',
    email: 'alifff.com',
    phoneNumber: '0912128444',
    secretKey: '',
  });

  expect(user.firstName).toBe('Ali');
  expect(userRepoMock.save).toHaveBeenCalledWith(user); // بررسی اینکه save صدا زده شده
});
