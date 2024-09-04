import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  async register({ password, email }: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(password, 12);
    } catch (error) {}
  }
}


interface IRegister {
  password: string;
  email: string;
}