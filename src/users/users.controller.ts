import { Controller, Post, Body, Logger, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import { GetAllUserDto } from './dto/GetAllUser.dto';
import { error } from 'console';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private usersService: UsersService) {}

  @Post('createUsers') // Ensure the route matches the Postman request
  async createUsers(@Body() createUserDto: CreateUserDto) {
    const {
      userEmail,
      displayName,
      mobileNumber,
      username,
      password,
      userType,
    } = createUserDto;

    try {
      const user = await this.usersService.createUser(
        userEmail,
        displayName,
        mobileNumber,
        username,
        password,
        userType,
      );
      this.logger.log('User created successfully');
      return user;
    } catch (error) {
      this.logger.error('Failed to create user', error.stack);
      throw error; // Rethrow the error to be handled by NestJS
    }
  }

  @Get('getAllUser')
  async getAllUser(@Query() getAllUserDto: GetAllUserDto) {
    const { userEmail, displayName, mobileNumber, username, userType } =
      getAllUserDto;
    try {
      const users = await this.usersService.getAllUser();
      return users;
    } catch (error) {
      this.logger.error('Failed to get all the users', error);
      throw error;
    }
  }
}
