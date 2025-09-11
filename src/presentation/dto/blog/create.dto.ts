import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  @Length(5, 50)
  @IsNotEmpty()
  title: string;
  @IsString()
  @Length(10, 3000)
  @IsNotEmpty()
  description: string;
  @IsString()
  @Length(7, 15)
  @IsNotEmpty()
  phoneNumber: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
