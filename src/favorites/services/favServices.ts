import { createAny } from '../../shared/factory/createAny';
import { ListFavModel } from '../entity/favModels';
import { createListFavs, IListFavs } from '../entity/favTypes';

export const createListOfFavoritesService = async (listFavsRequest: createListFavs): Promise<IListFavs> => {
  try {
    const listCreated = await createAny(ListFavModel)(listFavsRequest);
    if (!listCreated) throw new Error('list not created');
    return listCreated as IListFavs;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}

export const getListOfFavoritesService = async (userId: string): Promise<IListFavs[]> => {
  try {
    const list: IListFavs[] = await ListFavModel.find({ user_id: userId });
    return list;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}
