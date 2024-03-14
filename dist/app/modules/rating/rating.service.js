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
exports.RatingServices = exports.createRating = void 0;
const generateUUID_1 = __importDefault(require("../../../helpers/generateUUID"));
const rating_model_1 = __importDefault(require("./rating.model"));
function createRating(ratingData) {
    return __awaiter(this, void 0, void 0, function* () {
        const review_id = (0, generateUUID_1.default)();
        ratingData.review_id = review_id;
        try {
            const newRatingInstance = new rating_model_1.default(ratingData);
            const result = yield newRatingInstance.save();
            return newRatingInstance;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.createRating = createRating;
exports.RatingServices = {
    createRating,
};
