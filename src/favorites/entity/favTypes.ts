import { Types } from 'mongoose';

export interface IFav {
  title: string;
  description: string;
  link: string;
}

export interface IListFavs {
  _id: Types.ObjectId;
  user_id: string | Types.ObjectId;
  name: string;
  favs: IFav[];
  created_at: Date;
  updated_at: Date;
}

export type createListFavs = Omit<IListFavs, '_id' | 'user_id' | 'created_at' | 'updated_at'>;
