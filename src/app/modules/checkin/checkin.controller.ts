import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { catchAsync } from "../../../shared/catchAsync";
import { CheckinServices } from "./checkin.service";

const createCheckin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const checkinData = req.body;

    const result = await CheckinServices.createCheckin(checkinData);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Request success!",
      data: result,
    });
  }
);

export const CheckinControllers = { createCheckin };
