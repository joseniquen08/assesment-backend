import { Model } from 'mongoose';

export const createAny = (Model: Model<any>) => {
  return async <T>(any: T): Promise<T> => {
    return await new Model(any).save();
  }
}