import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserProviders } from './user.providers';
import { DatabaseModule } from '../../database/database.module';
import { UserRepository } from './user.repository';

@Module({
  imports: [DatabaseModule],
  providers: [...UserProviders, UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
