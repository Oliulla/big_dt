"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessControllers = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const catchAsync_1 = require("../../../shared/catchAsync");
const business_service_1 = require("./business.service");
const createBusiness = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const businessData = req.body;
    const result = yield business_service_1.BusinessServices.createBusiness(businessData);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Business created successfully!",
        data: result,
    });
}));
// const findNearbyMerchants: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const sortBy: string | undefined = req.query.sortBy as string | undefined;
//     const { latitude, longitude, maxDistance } = req.body;
//     const nearbyMerchants = await BusinessServices.findNearbyMerchants(
//       latitude,
//       longitude,
//       maxDistance,
//       sortBy
//     );
//     sendResponse(res, {
//       statusCode: 200,
//       success: true,
//       message: "Nearby merchants retrieved successfully!",
//       data: nearbyMerchants,
//     });
//   }
// );
// const findNearbyMerchants: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const sortBy: string | undefined = req.query.sortBy as string | undefined;
//     const { latitude, longitude, maxDistance } = req.body;
//     const nearbyMerchants = await BusinessServices.findNearbyMerchants(
//       latitude,
//       longitude,
//       maxDistance,
//       sortBy
//     );
//     sendResponse(res, {
//       statusCode: 200,
//       success: true,
//       message: "Nearby merchants retrieved successfully!",
//       data: nearbyMerchants,
//     });
//   }
// );
// const findNearbyMerchants: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const sortBy: string | undefined = req.query.sortBy as string | undefined;
//     const ratingsFilter: number | undefined = req.query.ratings
//       ? parseInt(req.query.ratings as string)
//       : undefined;
//     const facilitiesFilter: string | undefined = req.query.facilities as
//       | string
//       | undefined;
//     const { latitude, longitude, maxDistance } = req.body;
//     const nearbyMerchants = await BusinessServices.findNearbyMerchants(
//       latitude,
//       longitude,
//       maxDistance,
//       sortBy,
//       ratingsFilter,
//       facilitiesFilter
//     );
//     sendResponse(res, {
//       statusCode: 200,
//       success: true,
//       message: "Nearby merchants retrieved successfully!",
//       data: nearbyMerchants,
//     });
//   }
// );
const findNearbyMerchants = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sortBy = req.query.sortBy;
    const ratingsFilter = req.query.ratings
        ? parseFloat(req.query.ratings)
        : undefined;
    const facilitiesFilter = req.query.facilities;
    const { latitude, longitude, maxDistance } = req.body;
    const nearbyMerchants = yield business_service_1.BusinessServices.findNearbyMerchants(latitude, longitude, maxDistance, sortBy, ratingsFilter, facilitiesFilter);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Nearby merchants retrieved successfully!",
        data: nearbyMerchants,
    });
}));
const getMerchantDetails = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { business_id } = req.params;
    const merchantDetails = yield business_service_1.BusinessServices.getMerchantDetails(business_id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Merchant details retrieved successfully",
        data: merchantDetails,
    });
}));
exports.BusinessControllers = {
    createBusiness,
    findNearbyMerchants,
    getMerchantDetails,
};
