export class RegisterRequestDto {
  constructor(
    public firstName: string,
    public lastName: string,
    private password: string,
    public email: string,
    public phoneNumber: string,
    private secretKey?: string,
  ) {}
  getPassword() {
    return this.password;
  }
}
