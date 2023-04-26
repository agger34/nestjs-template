import { UserRole } from 'src/shared/enum';
import { User } from './user.interface';

export class CreateUserDto implements Partial<User> {
  userName?: string;
  password?: string;
  roles?: [UserRole];
}

export class ResponseUserDto implements Partial<User> {
  id?: string;
  userName: string;
  password?: string;
  roles?: [UserRole];
  createdAt?: Date;
  updatedAt?: Date;
}
