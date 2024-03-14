import generateUserId from "../../../helpers/generateUUID";
import IUser from "./user.interface";
import UserModel from "./user.model";

export async function createUser(profileData: IUser) {
  const user_id = generateUserId();

  profileData.user_id = user_id;

  try {
    const newUserInstance = new UserModel(profileData);

    const result = await newUserInstance.save();

    // console.log("result", result);

    return newUserInstance;
  } catch (error) {
    throw error;
  }
}

export const UserService = {
  createUser,
};

/*
function distance(lat1, lon1, lat2, lon2, unit) {
  const R = 6371; // Earth's radius in kilometers (change to 3959 for miles)
  const radLat1 = Math.PI * lat1 / 180;
  const radLat2 = Math.PI * lat2 / 180;
  const dLat = radLat2 - radLat1;
  const dLon = Math.PI * (lon2 - lon1) / 180;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
           Math.cos(radLat1) * Math.cos(radLat2) *
           Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 -



    function distance(lat1, lon1, lat2, lon2, unit) {
  const R = 6371; // Earth's radius in kilometers (change to 3959 for miles)
  const radLat1 = Math.PI * lat1 / 180;
  const radLat2 = Math.PI * lat2 / 180;
  const dLat = radLat2 - radLat1;
  const dLon = Math.PI * (lon2 - lon1) / 180;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
           Math.cos(radLat1) * Math.cos(radLat2) *
           Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  if (unit === 'M') {
    return distance * 0.621371; // convert kilometers to miles
  } else {
    return distance;
  }
}

*/
