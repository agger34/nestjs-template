import { Document } from 'mongoose';
import { UserRole } from '../../shared/enum';

export interface User extends Document {
  readonly username: string;
  readonly password: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly roles: [UserRole];
}
