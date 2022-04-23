import { UserModel } from '../../auth/entity/authModels';
import { IUser } from '../../auth/entity/authTypes';

export const getUserByEmail = async (email: string): Promise<IUser> => {
  try {
    const user: IUser | null = await UserModel.findOne({ email });
    if (!user) throw new Error('email not found');
    return user;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}
