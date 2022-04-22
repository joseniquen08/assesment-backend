import mongoose from 'mongoose';
import { IListFavs } from './favTypes';

export const ListFavsSchema = new mongoose.Schema<IListFavs>({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  favs: {
    type: [],
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

ListFavsSchema.methods.toJSON = function() {
  const { _id, user_id, name, favs } = this.toObject();
  return { _id, user_id, name, favs };
}

ListFavsSchema.set('toJSON',{ virtuals: true });
ListFavsSchema.set('toObject', { virtuals: true });
