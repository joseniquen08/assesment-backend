import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/errors/ApplicationError";
import { decodeToken } from '../../shared/utils/decodeToken';
import { createListFavs } from '../entity/favTypes';
import { createListOfFavoritesService, getListOfFavoritesService } from '../services/favServices';

export const createListOfFavoritesController = async (req: Request<{}, {}, createListFavs>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const list = await createListOfFavoritesService(req.body);
    res.status(201).json({ list });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}

export const getListOfFavoritesController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error(`token is required`);
    const user_id = decodeToken(token);
    const list = await getListOfFavoritesService(user_id);
    res.status(200).json({ list });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}
