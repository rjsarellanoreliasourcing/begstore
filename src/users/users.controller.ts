import { Controller, UsePipes, Post, Body, Next, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUsers(@Body() createUserDto: CreateUserDto) {
    const { userEmail, displayName, mobileNumber, username } = createUserDto;
    const user = this.usersService.createUser(
      userEmail,
      displayName,
      mobileNumber,
      username,
    );
    return user;
  }
}
