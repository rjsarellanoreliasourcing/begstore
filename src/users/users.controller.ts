import { Param } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('user')
export class UserCOntroller {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findById(id);
  }
}
