import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    try {
      return await this.prisma.user.create(userCreateArgs);
    } catch (err) {
      throw err;
    }
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    try {
      return await this.prisma.user.findUnique(userFindUniqueArgs);
    } catch (err) {
      throw err;
    }
  }
}
