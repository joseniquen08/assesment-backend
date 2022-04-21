import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/errors/ApplicationError';
import { loginUser, registerUser } from '../entity/authTypes';
import { loginUserService, registerUserService } from '../services/authServices';

export const loginUserController = async (req: Request<{}, {}, loginUser>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = await loginUserService(req.body);
    res.status(200).json({ token });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}

export const registerUserController = async (req: Request<{}, {}, registerUser>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = await registerUserService(req.body);
    res.status(201).json({ token });
  } catch (error: any) {
    next(new ApplicationError(400, `${error.message}`));
  }
}
