import jwt from 'jsonwebtoken';

export const decodeToken = (token: string): string => {
  try {
    const decodedToken = <jwt.UserIdJwtPayload>(jwt.verify(token, 'token_secret_assesment'));
    return decodedToken.id;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
};