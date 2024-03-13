import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { catchAsync } from "../../../shared/catchAsync";
import { RatingServices } from "./rating.service";

const createRating: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const ratingData = req.body;

    const result = await RatingServices.createRating(ratingData);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Request success!",
      data: result,
    });
  }
);

export const RatingControllers = { createRating };
