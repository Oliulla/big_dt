import express from "express";
import { BusinessControllers } from "./business.controller";

const router = express.Router();

router.post("/", BusinessControllers.createBusiness);

router.post("/nearby-merchants", BusinessControllers.findNearbyMerchants);

export const BusinessRoutes = router;
