"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const userSchema = new mongoose_1.Schema({
    user_id: { type: String, required: true, unique: true, maxlength: 22 },
    name: { type: String, required: true },
    review_count: { type: Number, required: true },
    yelping_since: { type: String, required: true },
    friends: { type: [String], required: true },
    useful: { type: Number, required: true },
    funny: { type: Number, required: true },
    cool: { type: Number, required: true },
    fans: { type: Number, required: true },
    elite: { type: [Number], required: true },
    average_stars: { type: Number, required: true },
    compliment_hot: { type: Number, required: true },
    compliment_more: { type: Number, required: true },
    compliment_profile: { type: Number, required: true },
    compliment_cute: { type: Number, required: true },
    compliment_list: { type: Number, required: true },
    compliment_note: { type: Number, required: true },
    compliment_plain: { type: Number, required: true },
    compliment_cool: { type: Number, required: true },
    compliment_funny: { type: Number, required: true },
    compliment_writer: { type: Number, required: true },
    compliment_photos: { type: Number, required: true },
});
const UserModel = mongoose_1.default.model("User", userSchema);
exports.default = UserModel;
