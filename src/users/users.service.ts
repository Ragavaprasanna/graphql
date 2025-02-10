import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users';
import { CreateUsersInput, UpdateUsersInput } from './dto/user.input';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private userRepo: Repository<Users>) {}

  // Get All Users
  async getAllUsers(): Promise<Users[]> {
    const users = await this.userRepo.find();
    console.log("Fetched users:", users);
    return users;
  }

  // Get User by ID
  async getUserById(id: string): Promise<Users> {
    return await this.userRepo.findOneOrFail({ where: { id } });
  }

  // Create User
  async createUser(input: CreateUsersInput): Promise<Users> {
    const newUser = this.userRepo.create(input);
    return await this.userRepo.save(newUser);
  }

  // Update User
  async updateUser(input: UpdateUsersInput): Promise<Users> {
    await this.userRepo.update(input.id, input);
    return this.getUserById(input.id);
  }
}
