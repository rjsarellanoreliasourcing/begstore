import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schema/user.schema';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(
    userEmail: string,
    displayName: string,
    mobileNumber: Number,
    username: string,
  ): Promise<User> {
    try {
      const newUser = new this.userModel({
        displayName,
        username,
        userEmail,
        mobileNumber,
      });
      const result = await newUser.save();
      this.logger.log('User saved successfully');
      return result;
    } catch (error) {
      this.logger.error('Error saving user', error.stack);
      throw error;
    }
  }
}
