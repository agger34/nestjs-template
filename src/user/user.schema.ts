import * as mongoose from 'mongoose';
import { UserRole } from 'src/shared/enum';

export const UserSchema = new mongoose.Schema(
  {
    userName: String,
    password: String,
    roles: { type: [], default: [UserRole.USER] },
  },
  {
    timestamps: true,
  },
);
