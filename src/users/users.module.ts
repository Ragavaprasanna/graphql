import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { Users } from './entities/users';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Users])], 
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
