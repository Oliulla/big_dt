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
exports.CheckinServices = exports.createCheckin = void 0;
const checkin_model_1 = __importDefault(require("./checkin.model"));
function createCheckin(checkinData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newCheckinInstance = new checkin_model_1.default(checkinData);
            const result = yield newCheckinInstance.save();
            return newCheckinInstance;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.createCheckin = createCheckin;
exports.CheckinServices = {
    createCheckin,
};
