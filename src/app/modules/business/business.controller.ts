import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { catchAsync } from "../../../shared/catchAsync";
import { BusinessServices } from "./business.service";

const createBusiness: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const businessData = req.body;

    const result = await BusinessServices.createBusiness(businessData);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Business created successfully!",
      data: result,
    });
  }
);

const findNearbyMerchants: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { latitude, longitude, maxDistance } = req.body;

    const nearbyMerchants = await BusinessServices.findNearbyMerchants(
      latitude,
      longitude,
      maxDistance
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Nearby merchants retrieved successfully!",
      data: nearbyMerchants,
    });
  }
);

const getMerchantDetails: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { business_id } = req.params;

    const merchantDetails = await BusinessServices.getMerchantDetails(
      business_id
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Merchant details retrieved successfully",
      data: merchantDetails,
    });
  }
);

export const BusinessControllers = {
  createBusiness,
  findNearbyMerchants,
  getMerchantDetails,
};
