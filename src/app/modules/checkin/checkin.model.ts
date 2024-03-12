import mongoose, { Schema } from "mongoose";
import ICheckin from "./checkin.interface";

const checkinSchema: Schema = new Schema({
  business_id: { type: String, required: true, maxlength: 22 },
  date: [{ type: String, required: true }],
});

const CheckinModel = mongoose.model<ICheckin>("Checkin", checkinSchema);

export default CheckinModel;
