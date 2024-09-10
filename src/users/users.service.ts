import { Injectable } from '@nestjs/common';
import User from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(userData: CreateUserDto) {
    const newUser = await this.userRepo.create(userData);
    await this.userRepo.save(newUser);
    return newUser;
  }

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
async findByEmail (email: string): Promise< User | undefined> {
  return this.userRepo.findOne({where: { email }})
}

}
