import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

export const createToken = (userId: string | Types.ObjectId): string => {
  try {
    return jwt.sign({ id: userId }, 'token_secret_assesment', {
      algorithm: 'HS256',
      expiresIn: '24h',
    });
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}