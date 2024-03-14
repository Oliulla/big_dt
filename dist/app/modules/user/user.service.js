"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = exports.createUser = void 0;
const generateUUID_1 = __importDefault(require("../../../helpers/generateUUID"));
const user_model_1 = __importDefault(require("./user.model"));
function createUser(profileData) {
    return __awaiter(this, void 0, void 0, function* () {
        const user_id = (0, generateUUID_1.default)();
        profileData.user_id = user_id;
        try {
            const newUserInstance = new user_model_1.default(profileData);
            const result = yield newUserInstance.save();
            // console.log("result", result);
            return newUserInstance;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.createUser = createUser;
exports.UserService = {
    createUser,
};
/*
function distance(lat1, lon1, lat2, lon2, unit) {
  const R = 6371; // Earth's radius in kilometers (change to 3959 for miles)
  const radLat1 = Math.PI * lat1 / 180;
  const radLat2 = Math.PI * lat2 / 180;
  const dLat = radLat2 - radLat1;
  const dLon = Math.PI * (lon2 - lon1) / 180;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
           Math.cos(radLat1) * Math.cos(radLat2) *
           Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 -



    function distance(lat1, lon1, lat2, lon2, unit) {
  const R = 6371; // Earth's radius in kilometers (change to 3959 for miles)
  const radLat1 = Math.PI * lat1 / 180;
  const radLat2 = Math.PI * lat2 / 180;
  const dLat = radLat2 - radLat1;
  const dLon = Math.PI * (lon2 - lon1) / 180;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
           Math.cos(radLat1) * Math.cos(radLat2) *
           Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  if (unit === 'M') {
    return distance * 0.621371; // convert kilometers to miles
  } else {
    return distance;
  }
}

*/
