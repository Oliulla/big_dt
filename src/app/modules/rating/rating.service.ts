import generateUserId from "../../../helpers/generateUUID";
import IRating from "./rating.interface";
import RatingModel from "./rating.model";

export async function createRating(ratingData: IRating) {
  const review_id = generateUserId();

  ratingData.review_id = review_id;

  try {
    const newRatingInstance = new RatingModel(ratingData);

    const result = await newRatingInstance.save();

    return newRatingInstance;
  } catch (error) {
    throw error;
  }
}

export const RatingServices = {
  createRating,
};
