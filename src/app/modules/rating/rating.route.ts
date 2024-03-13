import express from "express";
import { RatingControllers } from "./rating.controller";

const router = express.Router();

router.post("/", RatingControllers.createRating);

export const RatingRoutes = router;
