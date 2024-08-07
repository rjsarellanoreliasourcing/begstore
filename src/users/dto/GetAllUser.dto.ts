import { IsString } from 'class-validator';

export class GetAllUserDto {
  username: string;
  displayName: string;
  userId: string;
  userEmail: string;
  mobileNumber: Number;
  password: string;
  userType: string;
}
