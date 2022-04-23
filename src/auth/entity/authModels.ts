import mongoose from 'mongoose';
import { UserSchema } from './authSchemas';
import { IUser } from './authTypes';

export const UserModel = mongoose.model<IUser>('User', UserSchema);