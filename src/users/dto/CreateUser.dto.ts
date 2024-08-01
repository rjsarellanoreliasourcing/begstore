import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsInt()
  username: string;
  displayName?: string;
  userId: string;
  userEmail: string;
  mobileNumber: Number;
}
