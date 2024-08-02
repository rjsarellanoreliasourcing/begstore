import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dto/auth.dto';


@Injectable()
export class AuthService {
 validateUser(authPayloadDto:AuthPayloadDto) {

 }
}
