import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { BusinessRoutes } from "../modules/business/business.route";

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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
