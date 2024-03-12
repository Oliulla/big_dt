import generateUserId from "../../../helpers/generateUUID";
import IUser from "./user.interface";
import UserModel from "./user.model";

export async function createUser(profileData: IUser) {
  const user_id = generateUserId();

  profileData.user_id = user_id;

  try {
    const newUserInstance = new UserModel(profileData);

    const result = await newUserInstance.save();

    console.log("result", result);

    return newUserInstance;
  } catch (error) {
    throw error;
  }
}

export const UserService = {
  createUser,
};
