import mongoose, { Schema } from "mongoose";
import IUser from "./user.interface";

const userSchema: Schema = new Schema({
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

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;
