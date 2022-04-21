import { createAny } from "../../shared/factory/createAny";
import { createToken } from "../../shared/utils/createToken";
import { validatePassword } from "../../shared/utils/decrypt";
import { encryptText } from "../../shared/utils/encrypt";
import { getUserByEmail } from "../../shared/utils/getUserByEmail";
import { UserModel } from "../entity/authModels";
import { IUser, loginUser, registerUser } from '../entity/authTypes';

export const loginUserService = async (userRequest: loginUser): Promise<string> => {
  try {
    const user = await getUserByEmail(userRequest.email);
    const isValid = validatePassword(userRequest.password, user.password);
    if (!isValid) throw new Error('password is incorrect');
    return createToken(user._id);
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}

export const registerUserService = async (userRequest: registerUser): Promise<string> => {
  try {
    userRequest.password = encryptText(userRequest.password);
    const user = await createAny(UserModel)(userRequest);
    const newUser =  user as IUser;
    return createToken(newUser._id);
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}
