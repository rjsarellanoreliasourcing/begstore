import {
  Body,
  Post,
  Controller,
  HttpException,
  Get,
  Req,
} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { Request } from 'express';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() createUserDto: CreateUserDto,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    console.log('Received Request Body:', createUserDto);
    return this.authService.register(createUserDto);
  }

  @Get('verifyDuplicate')
  async verifyDuplicate(@Req() req: Request) {
    const email = req.query.email as string;
    const isDuplicate = await this.authService.verifyDuplicate(email);
    return { isDuplicate };
  }

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log('Inside AuthController status method');
    console.log(req.user);
    return req.user;
  }
}
