import { UserRole } from '../../shared/enum';
import { User } from './user.interface';

export class CreateUserDto implements Partial<User> {
  username?: string;
  password?: string;
  roles?: [UserRole];
}

export class ResponseUserDto implements Partial<User> {
  id?: string;
  username: string;
  password?: string;
  roles?: [UserRole];
  createdAt?: Date;
  updatedAt?: Date;
}