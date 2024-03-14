"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const business_route_1 = require("../modules/business/business.route");
const rating_route_1 = require("../modules/rating/rating.route");
const checkin_route_1 = require("../modules/checkin/checkin.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/user",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/business",
        route: business_route_1.BusinessRoutes,
    },
    {
        path: "/rating",
        route: rating_route_1.RatingRoutes,
    },
    {
        path: "/checkin",
        route: checkin_route_1.CheckinRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
