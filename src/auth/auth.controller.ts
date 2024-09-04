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

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('displayName') displayName: string,
    @Body('username') username: string,
    @Body('userType') userType: string,
    @Body('mobileNumber') mobileNumber: number,
    @Body('userId') userId: string,
  ) {
    return this.authService.register({
      email,
      password,
      displayName,
      username,
      userType,
      mobileNumber,
      userId,
    });
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
