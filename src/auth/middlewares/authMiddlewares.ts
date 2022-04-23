import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { ApplicationError } from '../../shared/errors/ApplicationError';

export const registerSchema = yup.object({
  body: yup.object({
    email: yup.string().email('invalid email').required('email is required'),
    username: yup.string().required('username is required'),
    password: yup.string().min(8, 'min length is 8').required('password is required'),
  }),
});

export const loginSchema = yup.object({
  body: yup.object({
    email: yup.string().email('invalid email').required('email is required'),
    password: yup.string().min(8, 'min length is 8').required('password is required'),
  }),
});

export const authMiddleware = (schema: any) => async (req: Request, _res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      body: req.body
    });
    next();
  } catch (error: any) {
    next(new ApplicationError(400, error, 'validation'));
  }
}
