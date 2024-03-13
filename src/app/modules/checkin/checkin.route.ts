import express from "express";
import { CheckinControllers } from "./checkin.controller";

const router = express.Router();

router.post("/", CheckinControllers.createCheckin);

export const CheckinRoutes = router;
