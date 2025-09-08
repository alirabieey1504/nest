import { randomUUID } from 'crypto';
import { Blog } from './blog';
export enum Role {
  admin = 'admin',
  user = 'user',
  author = 'author',
}
export class User {
  static phoneRegex = /^\+?[1-9]\d{7,14}$/;
  public blog: Blog[] = [];
  private role: Role = Role.user;
  private readonly id: string;

  constructor(
    public firstName: string,
    public lastName: string,
    private password: string,
    private email: string,
    private phoneNumber: string,
    private secretKey: string,
  ) {
    this.id = randomUUID();
    this.validation();
  }

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  get GetPassword() {
    return this.password;
  }
  get GetEmail() {
    return this.email;
  }
  get GetPhoneNumber() {
    return this.phoneNumber;
  }
  get GetSecretKey() {
    return this.secretKey;
  }
  private checkValidationPassword() {
    if (this.password.length < 5)
      throw new Error('Password showld more than 5 charecter');
    if (/\d/.test(this.password)) throw new Error('Password contain a number');
    if (!/[A-Z]/.test(this.password))
      throw new Error('Password must contain at least one uppercase letter');
  }

  private checkValidEmail() {
    if (!this.email.includes('@'))
      throw new Error('Email must contain contian @ charecter');
  }

  private checkValidPhoneNumber() {
    if (!User.phoneRegex.test(this.phoneNumber)) throw new Error('');
  }

  private validation() {
    this.checkValidEmail();
    this.checkValidPhoneNumber();
    this.checkValidationPassword();
  }

  private changeRole(newRole: Role) {
    this.role = newRole;
  }
  getRole() {
    return this.role;
  }
  promoteToadmin() {
    if (this.blog.length >= 1) this.changeRole(Role.author);
    if (this.secretKey == 'alibaba') this.changeRole(Role.admin);
    else throw new Error('cannot promote to admin');
  }
}
