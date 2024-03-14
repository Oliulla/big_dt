import express from "express";
import { BusinessControllers } from "./business.controller";

const router = express.Router();

router.post("/", BusinessControllers.createBusiness);

router.post("/nearby-merchants", BusinessControllers.findNearbyMerchants);

router.get(
  "/nearby-merchants/:business_id",
  BusinessControllers.getMerchantDetails
);

export const BusinessRoutes = router;
