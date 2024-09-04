import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateUserDto {
  username: string;
  displayName: string;
  userId: string;
  email: string;
  mobileNumber: Number;
  password: string;
  userType: string;
}
