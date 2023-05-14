// import { Document } from 'mongoose';
// import { UserRole } from '../../shared/enum';

// export interface IUser extends Document {
//   readonly username: string;
//   readonly password: string;
//   readonly createdAt: Date;
//   readonly updatedAt: Date;
//   readonly roles: [UserRole];
// }

import { UserRole } from 'src/shared/enum';

export interface IUserKey {
  id: string;
}

export interface IUser extends IUserKey {
  username: string;
  password: string;
  roles: [UserRole];
}
