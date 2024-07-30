import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schema/user.schema';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  createUser(createUser: CreateUserDto) {
    const newUser = new this.userModel(CreateUserDto);
    return newUser.save();
  }

  getUsers() {
    return this.userModel.find();
  }
}
