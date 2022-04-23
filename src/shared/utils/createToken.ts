import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

export const createToken = (userId: string | Types.ObjectId): string => {
  try {
    const token = jwt.sign({ id: userId }, 'token_secret_assesment', {
      algorithm: 'HS256',
      expiresIn: '24h',
    });
    return `Bearer ${token}`;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}
