import generateUserId from "../../../helpers/generateUUID";
import IBusiness from "./business.interface";
import BusinessModel from "./business.model";

export async function createBusiness(businessData: IBusiness) {
  const business_id = generateUserId();

  businessData.business_id = business_id;

  try {
    const newBusinessInstance = new BusinessModel(businessData);

    const result = await newBusinessInstance.save();

    // console.log("result", result);

    return newBusinessInstance;
  } catch (error) {
    throw error;
  }
}

export const BusinessServices = {
  createBusiness,
};
