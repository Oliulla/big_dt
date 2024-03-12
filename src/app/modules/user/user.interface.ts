import { Document } from "mongoose";

export default interface IUser extends Document {
  user_id: string;
  name: string;
  review_count: number;
  yelping_since: string;
  friends: string[];
  useful: number;
  funny: number;
  cool: number;
  fans: number;
  elite: number[];
  average_stars: number;
  compliment_hot: number;
  compliment_more: number;
  compliment_profile: number;
  compliment_cute: number;
  compliment_list: number;
  compliment_note: number;
  compliment_plain: number;
  compliment_cool: number;
  compliment_funny: number;
  compliment_writer: number;
  compliment_photos: number;
}
