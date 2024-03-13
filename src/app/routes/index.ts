import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { BusinessRoutes } from "../modules/business/business.route";
import { RatingRoutes } from "../modules/rating/rating.route";
import { CheckinRoutes } from "../modules/checkin/checkin.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/business",
    route: BusinessRoutes,
  },
  {
    path: "/rating",
    route: RatingRoutes,
  },
  {
    path: "/checkin",
    route: CheckinRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
