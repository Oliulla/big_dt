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

// export async function findNearbyMerchants(
//   userLatitude: number,
//   userLongitude: number,
//   maxDistance: number,
//   sortBy: string | undefined
// ): Promise<IBusiness[]> {
//   try {
//     const allBusinesses = await BusinessModel.find(
//       {},
//       {
//         _id: 0,
//         business_id: 1,
//         name: 1,
//         latitude: 1,
//         longitude: 1,
//         review_count: 1,
//         stars: 1,
//       }
//     );

//     const nearbyMerchants: IBusiness[] = [];
//     // let minDistance = Infinity;

//     allBusinesses.forEach((business: any) => {
//       const businessLatitude = business.latitude;
//       const businessLongitude = business.longitude;

//       const distance = calculateDistance(
//         userLatitude,
//         userLongitude,
//         businessLatitude,
//         businessLongitude
//       );

//       if (distance <= maxDistance) {
//         nearbyMerchants.push({
//           business_id: business.business_id,
//           name: business.name,
//           latitude: businessLatitude,
//           longitude: businessLongitude,
//           review_count: business.review_count,
//           stars: business.stars,
//         } as IBusiness);
//       }
//     });

//     if (sortBy === "review_recommendations") {
//       nearbyMerchants.sort((a, b) => b.review_count - a.review_count);
//     } else if (sortBy === "ratings") {
//       nearbyMerchants.sort((a, b) => b.stars - a.stars);
//     }

//     return nearbyMerchants;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function findNearbyMerchants(
//   userLatitude: number,
//   userLongitude: number,
//   maxDistance: number,
//   sortBy: string | undefined,
//   filterByRatings: number | undefined,
//   filterByFacilities: string[] | undefined
// ): Promise<IBusiness[]> {
//   try {
//     const allBusinesses = await BusinessModel.find(
//       {},
//       {
//         _id: 0,
//         business_id: 1,
//         name: 1,
//         latitude: 1,
//         longitude: 1,
//         review_count: 1,
//         stars: 1,
//         attributes: 1,
//       }
//     );

//     const nearbyMerchants: IBusiness[] = [];

//     allBusinesses.forEach((business: any) => {
//       const businessLatitude = business.latitude;
//       const businessLongitude = business.longitude;

//       const distance = calculateDistance(
//         userLatitude,
//         userLongitude,
//         businessLatitude,
//         businessLongitude
//       );

//       if (distance <= maxDistance) {
//         let isQualified = true;

//         if (filterByRatings && business.stars < filterByRatings) {
//           isQualified = false;
//         }

//         if (
//           filterByFacilities &&
//           filterByFacilities.length > 0 &&
//           business.attributes
//         ) {
//           for (const facility of filterByFacilities) {
//             if (!business.attributes.facility.includes(facility)) {
//               isQualified = false;
//               break;
//             }
//           }
//         }

//         if (isQualified) {
//           nearbyMerchants.push({
//             business_id: business.business_id,
//             name: business.name,
//             latitude: businessLatitude,
//             longitude: businessLongitude,
//             review_count: business.review_count,
//             stars: business.stars,
//           } as IBusiness);
//         }
//       }
//     });

//     if (sortBy === "review_recommendations") {
//       nearbyMerchants.sort((a, b) => b.review_count - a.review_count);
//     } else if (sortBy === "ratings") {
//       nearbyMerchants.sort((a, b) => b.stars - a.stars);
//     }

//     return nearbyMerchants;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function findNearbyMerchants(
//   userLatitude: number,
//   userLongitude: number,
//   maxDistance: number,
//   sortBy: string | undefined,
//   filterBy: string | undefined
// ): Promise<IBusiness[]> {
//   try {
//     const allBusinesses = await BusinessModel.find(
//       {},
//       {
//         _id: 0,
//         business_id: 1,
//         name: 1,
//         latitude: 1,
//         longitude: 1,
//         review_count: 1,
//         stars: 1,
//         attributes: 1,
//       }
//     );

//     const nearbyMerchants: IBusiness[] = [];

//     allBusinesses.forEach((business: any) => {
//       const businessLatitude = business.latitude;
//       const businessLongitude = business.longitude;

//       const distance = calculateDistance(
//         userLatitude,
//         userLongitude,
//         businessLatitude,
//         businessLongitude
//       );

//       if (distance <= maxDistance) {
//         let isQualified = true;

//         // Check if business meets filter criteria
//         if (filterBy && business.attributes) {
//           if (filterBy === "ratings") {
//             if (business.stars < 4) {
//               isQualified = false;
//             }
//           } else if (filterBy === "facilities") {
//             if (!business.attributes.facility) {
//               isQualified = false;
//             }
//           }
//         }

//         // If business meets all criteria, add it to nearbyMerchants
//         if (isQualified) {
//           nearbyMerchants.push({
//             business_id: business.business_id,
//             name: business.name,
//             latitude: businessLatitude,
//             longitude: businessLongitude,
//             review_count: business.review_count,
//             stars: business.stars,
//           } as IBusiness);
//         }
//       }
//     });

//     // Sort nearbyMerchants based on sortBy parameter
//     if (sortBy === "review_recommendations") {
//       nearbyMerchants.sort((a, b) => b.review_count - a.review_count);
//     } else if (sortBy === "ratings") {
//       nearbyMerchants.sort((a, b) => b.stars - a.stars);
//     }

//     return nearbyMerchants;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function findNearbyMerchants(
//   userLatitude: number,
//   userLongitude: number,
//   maxDistance: number,
//   sortBy: string | undefined,
//   ratingsFilter: number | undefined,
//   facilitiesFilter: string | undefined
// ): Promise<IBusiness[]> {
//   try {
//     const query: any = {};

//     // Add filters to the query
//     if (ratingsFilter !== undefined) {
//       query.stars = { $lt: ratingsFilter };
//     }

//     if (facilitiesFilter) {
//       query["attributes.facility"] = facilitiesFilter;
//     }

//     const allBusinesses = await BusinessModel.find(
//       {
//         latitude: {
//           $lte: userLatitude + maxDistance,
//           $gte: userLatitude - maxDistance,
//         },
//         longitude: {
//           $lte: userLongitude + maxDistance,
//           $gte: userLongitude - maxDistance,
//         },
//         ...query,
//       },
//       {
//         _id: 0,
//         business_id: 1,
//         name: 1,
//         latitude: 1,
//         longitude: 1,
//         review_count: 1,
//         stars: 1,
//         attributes: 1,
//       }
//     );

//     // Sort nearbyMerchants based on sortBy parameter
//     if (sortBy === "review_recommendations") {
//       allBusinesses.sort((a, b) => b.review_count - a.review_count);
//     } else if (sortBy === "ratings") {
//       allBusinesses.sort((a, b) => b.stars - a.stars);
//     }

//     return allBusinesses;
//   } catch (error) {
//     throw error;
//   }
// }

export async function findNearbyMerchants(
  userLatitude: number,
  userLongitude: number,
  maxDistance: number,
  sortBy: string | undefined,
  ratingsFilter: number | undefined,
  facilitiesFilter: string | undefined
): Promise<IBusiness[]> {
  try {
    // console.log(ratingsFilter);
    const query: any = {
      latitude: {
        $lte: userLatitude + maxDistance,
        $gte: userLatitude - maxDistance,
      },
      longitude: {
        $lte: userLongitude + maxDistance,
        $gte: userLongitude - maxDistance,
      },
    };

    if (ratingsFilter !== undefined) {
      query.stars = { $lte: ratingsFilter };
    }

    if (facilitiesFilter) {
      query["attributes.facility"] = facilitiesFilter;
    }

    // console.log(query);

    const nearbyMerchants = await BusinessModel.find(query, {
      _id: 0,
      business_id: 1,
      name: 1,
      address: 1,
      latitude: 1,
      longitude: 1,
      review_count: 1,
      stars: 1,
      attributes: 1,
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
