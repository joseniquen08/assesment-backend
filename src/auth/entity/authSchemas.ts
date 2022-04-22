import mongoose from 'mongoose';
import { IUser } from './authTypes';

export const UserSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

UserSchema.methods.toJSON = function() {
  const { _id, email, username } = this.toObject();
  return { _id, email, username };
}

UserSchema.set('toJSON',{ virtuals: true });
UserSchema.set('toObject', { virtuals: true });
