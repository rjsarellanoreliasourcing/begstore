import { Injectable } from '@nestjs/common';
import User from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findById(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    {
      if (user) {
        return user;
      }
    }
  }

  async findAll() {
    const users = await this.userRepo.find();

    return users;
  }
}
