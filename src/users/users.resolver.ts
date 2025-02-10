import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Users } from './entities/users';
import { CreateUsersInput, UpdateUsersInput } from './dto/user.input';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

 
  @Query(() => [Users]) // Ensuring it returns an array of users
  async users(): Promise<Users[]> {
    return this.usersService.getAllUsers();
  }

  // Get User by ID
  @Query(() => Users, { name: 'users' })
  async getUser(@Args('id') id: string) {
    return await this.usersService.getUserById(id);
  }

  // Create User
  @Mutation(() => Users)
  async createUser(@Args('input') input: CreateUsersInput) {
    return await this.usersService.createUser(input);
  }

  // Update User
  @Mutation(() => Users)
  async updateUser(@Args('input') input: UpdateUsersInput) {
    return await this.usersService.updateUser(input);
  }
}
