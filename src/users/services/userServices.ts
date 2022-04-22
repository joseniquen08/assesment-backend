import { UserModel } from "../../auth/entity/authModels";
import { IUser } from "../../auth/entity/authTypes";

export const getUsersService = async (): Promise<IUser[]> => {
  try {
    const users: IUser[] = await UserModel.find({});
    return users;
  } catch (error: any) {
    throw new Error(error);
  }
}

export const getUserByIdService = async (id: string): Promise<IUser> => {
  try {
    const user = await UserModel.findById(id);
    return user as IUser;
  } catch (error: any) {
    throw new Error(error);
  }
}
