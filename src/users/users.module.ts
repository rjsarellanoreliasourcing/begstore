import { Module } from '@nestjs/common';
import { UserCOntroller } from './users.controller';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from "./users.entity"

@Module({
  imports: [
   TypeOrmModule.forFeature([User])
  ],
  controllers: [UserCOntroller],
  providers: [UserService],
  exports: [],
})
export class UsersModule {}
