import mongoose from 'mongoose';
import { ListFavsSchema } from './favSchemas';
import { IListFavs } from './favTypes';

export const ListFavModel = mongoose.model<IListFavs>('ListFavorites', ListFavsSchema);
