import mongoose, { Schema } from 'mongoose';
import IRating from './rating.interface';

const ratingSchema: Schema = new Schema({
  review_id: { type: String, required: true, unique: true, maxlength: 22 },
  user_id: { type: String, required: true, maxlength: 22 },
  business_id: { type: String, required: true, maxlength: 22 },
  stars: { type: Number, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
  useful: { type: Number, required: true },
  funny: { type: Number, required: true },
  cool: { type: Number, required: true }
});

const RatingModel = mongoose.model<IRating>('Rating', ratingSchema);

export default RatingModel;
