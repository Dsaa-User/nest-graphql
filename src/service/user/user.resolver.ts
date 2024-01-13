import { CreateOneUserArgs, FindUniqueUserArgs, User } from 'src/@generated';
import { UserController } from './user.controller';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userController: UserController) {}

  @Mutation(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async userCreateOne(
    @Args()
    userCreateArgs: CreateOneUserArgs,
  ): Promise<User | void> {
    return await this.userController.createOne({
      ...userCreateArgs,
    });
  }

  @Query(() => User, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  userFindOne(
    @Args()
    userFindUniqueArgs: FindUniqueUserArgs,
  ): Promise<User | void> {
    return this.userController.findOne({
      ...userFindUniqueArgs,
    });
  }
}
