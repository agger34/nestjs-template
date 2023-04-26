import { User } from './user.interface';

export class CreateUserDto implements Partial<User> {
  userName?: string;
  password?: string;
}

export class ResponseUserDto implements Partial<User> {
  id?: string;
  userName: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
