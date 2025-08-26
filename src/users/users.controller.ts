import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userservice: UsersService) {}

  @Post()
  sendToPost() {
    console.log('this is test');
  }
  @Get()
  findAll() {
    this.userservice.findAll();
  }
}
