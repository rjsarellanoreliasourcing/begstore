import { IsNotEmpty, IsString, IsInt, IsOptional, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, {message: " Invalid email Format"})
  email: string;


  @IsNotEmpty({message: "password should not be empty"})
  @Length(6,20, {message: "password must be between 6 to 20 characters"})
  password: string;
}
