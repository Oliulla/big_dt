import express from "express";
import { BusinessControllers } from "./business.controller";

const router = express.Router();

router.post("/", BusinessControllers.createBusiness);

export const BusinessRoutes = router;
