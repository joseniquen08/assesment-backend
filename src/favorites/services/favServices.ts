import { Types } from 'mongoose';
import { createAny } from '../../shared/factory/createAny';
import { ListFavModel } from '../entity/favModels';
import { createListFavs, IListFavs } from '../entity/favTypes';

export const createFavoritesListService = async (listFavsRequest: createListFavs, user_id: string | Types.ObjectId): Promise<IListFavs> => {
  try {
    const listCreated = await createAny(ListFavModel)({...listFavsRequest, user_id});
    if (!listCreated) throw new Error('list not created');
    return listCreated as IListFavs;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}

export const getFavoritesListService = async (userId: string): Promise<IListFavs[]> => {
  try {
    const list: IListFavs[] = await ListFavModel.find({ user_id: userId });
    return list;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}

export const getFavoritesListByIdService = async (listId: string): Promise<IListFavs> => {
  try {
    const listFavs: IListFavs | null = await ListFavModel.findById(listId);
    if (!listFavs) throw new Error('list not found');
    return listFavs;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}

export const deleteFavoritesListByIdService = async (listId: string): Promise<IListFavs> => {
  try {
    const listFavs: IListFavs | null = await ListFavModel.findByIdAndDelete(listId);
    if (!listFavs) throw new Error('list not found');
    return listFavs;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}
