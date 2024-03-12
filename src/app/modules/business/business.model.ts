import mongoose, { Schema } from "mongoose";
import IBusiness from "./business.interface";

const businessSchema: Schema = new Schema({
  business_id: { type: String, required: true, unique: true, maxlength: 22 },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true, maxlength: 2 },
  postal_code: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  stars: { type: Number, required: true },
  review_count: { type: Number, required: true },
  is_open: { type: Number, required: true },
  attributes: { type: Schema.Types.Mixed },
  categories: [{ type: String }],
  hours: { type: Schema.Types.Mixed },
});

const BusinessModel = mongoose.model<IBusiness>("Business", businessSchema);

export default BusinessModel;
