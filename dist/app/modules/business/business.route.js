"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRoutes = void 0;
const express_1 = __importDefault(require("express"));
const business_controller_1 = require("./business.controller");
const router = express_1.default.Router();
router.post("/", business_controller_1.BusinessControllers.createBusiness);
router.post("/nearby-merchants", business_controller_1.BusinessControllers.findNearbyMerchants);
router.get("/nearby-merchants/:business_id", business_controller_1.BusinessControllers.getMerchantDetails);
exports.BusinessRoutes = router;
