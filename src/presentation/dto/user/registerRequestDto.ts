export class RegisterRequestDto {
  constructor(
    public firstName: string,
    public lastName: string,
    public password: string,
    public email: string,
    public phoneNumber: string,
    private secretKey?: string,
  ) {}
}
