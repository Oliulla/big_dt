"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckinRoutes = void 0;
const express_1 = __importDefault(require("express"));
const checkin_controller_1 = require("./checkin.controller");
const router = express_1.default.Router();
router.post("/", checkin_controller_1.CheckinControllers.createCheckin);
exports.CheckinRoutes = router;
