import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';

@Injectable()
export class UserController {
  constructor(private readonly userService: UserService) {}

  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    const { password } = userCreateArgs.data;

    //? Event 0000: encrypt user password
    //check if password is not null

    return await this.userService.createOne(userCreateArgs);
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    return await this.userService.findOne(userFindUniqueArgs);
  }
}
