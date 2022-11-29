import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

@Controller('users')
@UseGuards(JwtGuard)
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
