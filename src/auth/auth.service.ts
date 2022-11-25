import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';

@Injectable({})
export class AuthService {
  constructor (private prisma: PrismaService) {}
  signup(dto: AuthDTO) {
    return 'I am signed up.';
  }

  signin() {
    return 'I am signed in.';
  }
}
