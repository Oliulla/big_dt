import generateUserId from "../../../helpers/generateUUID";
import IBusiness from "./business.interface";
import BusinessModel from "./business.model";

const EARTH_RADIUS_KM = 6371;

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

export async function findNearbyMerchants(
  userLatitude: number,
  userLongitude: number,
  maxDistance: number,
  sortBy: string | undefined
): Promise<IBusiness[]> {
  try {
    const allBusinesses = await BusinessModel.find(
      {},
      {
        _id: 0,
        business_id: 1,
        name: 1,
        latitude: 1,
        longitude: 1,
        review_count: 1,
        stars: 1,
      }
    );

    const nearbyMerchants: IBusiness[] = [];
    // let minDistance = Infinity;

    allBusinesses.forEach((business: any) => {
      const businessLatitude = business.latitude;
      const businessLongitude = business.longitude;

      const distance = calculateDistance(
        userLatitude,
        userLongitude,
        businessLatitude,
        businessLongitude
      );

      if (distance <= maxDistance) {
        nearbyMerchants.push({
          business_id: business.business_id,
          name: business.name,
          latitude: businessLatitude,
          longitude: businessLongitude,
          review_count: business.review_count,
          stars: business.stars,
        } as IBusiness);
      }
    });

    if (sortBy === "review_recommendations") {
      nearbyMerchants.sort((a, b) => b.review_count - a.review_count);
    } else if (sortBy === "ratings") {
      nearbyMerchants.sort((a, b) => b.stars - a.stars);
    }

    return nearbyMerchants;
  } catch (error) {
    throw error;
  }
}

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = EARTH_RADIUS_KM * c;
  return distance;
}

function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export async function getMerchantDetails(
  business_id: string
): Promise<IBusiness | null> {
  try {
    const merchantDetails = await BusinessModel.findOne({ business_id });

    return merchantDetails;
  } catch (error) {
    throw error;
  }
}

export const BusinessServices = {
  createBusiness,
  findNearbyMerchants,
  getMerchantDetails,
};
