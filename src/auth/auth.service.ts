import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    // private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    try {
      const existingUser = await this.userService.findByEmail(email);
      if (existingUser) {
        throw new ConflictException('Email already in use');
      } else {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await this.userService.create({
          email,
          password: hashedPassword,
        });

        return user;
      }
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }

      // console.error(' error during registration', error.message);
      // throw error('Registration failed');
    }
  }

  async verifyDuplicate(email: string): Promise<boolean> {
    const user = await this.userService.findByEmail(email);
    return !!user;
  }
}
