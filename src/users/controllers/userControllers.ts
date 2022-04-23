import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/errors/ApplicationError";
import { getUserByIdService, getUsersService } from "../services/userServices";

export const getUsersController = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await getUsersService();
    res.status(200).json({ users });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}

export const getUserByIdController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await getUserByIdService(req.params.id);
    res.status(200).json({ user });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}
