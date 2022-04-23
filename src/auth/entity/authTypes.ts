import { Types } from 'mongoose';

export interface IUser {
  _id: Types.ObjectId;
  email: string;
  username: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export type loginUser = Omit<IUser, '_id' | 'username' | 'created_at' | 'updated_at'>;
export type registerUser = Omit<IUser, '_id' | 'created_at' | 'updated_at'>;
