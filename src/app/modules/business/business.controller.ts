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
      message: "User created successfully!",
      data: result,
    });
  }
);

export const UserControllers = { createBusiness };
