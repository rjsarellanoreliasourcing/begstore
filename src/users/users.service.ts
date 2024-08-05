import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schema/user.schema';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private userModel: Model<User>) {}

  async createUser(
    userEmail: string,
    displayName: string,
    mobileNumber: Number,
    username: string,
  ): Promise<User> {
    const newUser = new this.userModel({
      displayName,
      username,
      userEmail,
      mobileNumber,
    });
    return newUser.save();
  }
}
