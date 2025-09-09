export class CreateBlogDto {
  constructor(
    public title: string,
    public description: string,
    public phoneNumber: string,
    public email: string,
  ) {}
}
