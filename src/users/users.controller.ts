import { Controller, Post, Body, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private usersService: UsersService) {}

  @Post('createUsers') // Ensure the route matches the Postman request
  async createUsers(@Body() createUserDto: CreateUserDto) {
    const { userEmail, displayName, mobileNumber, username } = createUserDto;

    try {
      const user = await this.usersService.createUser(
        userEmail,
        displayName,
        mobileNumber,
        username,
      );
      this.logger.log('User created successfully');
      return user;
    } catch (error) {
      this.logger.error('Failed to create user', error.stack);
      throw error; // Rethrow the error to be handled by NestJS
    }
  }
}
