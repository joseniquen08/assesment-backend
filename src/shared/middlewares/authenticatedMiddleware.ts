import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../errors/ApplicationError';
import { verifyToken } from '../utils/verifyToken';

export const isAuthenticated = () => async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw new Error(`token is required`);
    if (!verifyToken(token)) throw new Error(`token expired`);
    next();
  } catch (error: any) {
    next(new ApplicationError(400, error, 'validation'));
  }
}
