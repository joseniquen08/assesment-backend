import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/errors/ApplicationError";
import { decodeToken } from '../../shared/utils/decodeToken';
import { createListFavs } from '../entity/favTypes';
import { createFavoritesListService, deleteFavoritesListByIdService, getFavoritesListByIdService, getFavoritesListService } from '../services/favServices';

export const createFavoritesListController = async (req: Request<{}, {}, createListFavs>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error(`token is required`);
    const user_id = decodeToken(token);
    const list = await createFavoritesListService(req.body, user_id);
    res.status(201).json({ list });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}

export const getFavoritesListController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error(`token is required`);
    const user_id = decodeToken(token);
    const list = await getFavoritesListService(user_id);
    res.status(200).json({ list });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}

export const getFavoritesListByIdController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const listFavs = await getFavoritesListByIdService(req.params.id);
    res.status(200).json({ listFavs });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}

export const deleteFavoriteListByIdController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const listFavs = await deleteFavoritesListByIdService(req.params.id);
    res.status(200).json({ listFavs });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
}
