import * as mongoose from 'mongoose';
import { UserRole } from 'src/shared/enum';

export const UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    roles: { type: [], default: [UserRole.USER] },
  },
  {
    timestamps: true,
  },
);
