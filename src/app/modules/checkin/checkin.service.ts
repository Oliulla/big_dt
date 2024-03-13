import ICheckin from "./checkin.interface";
import CheckinModel from "./checkin.model";

export async function createCheckin(checkinData: ICheckin) {
  try {
    const newCheckinInstance = new CheckinModel(checkinData);

    const result = await newCheckinInstance.save();

    return newCheckinInstance;
  } catch (error) {
    throw error;
  }
}

export const CheckinServices = {
  createCheckin,
};
