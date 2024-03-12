import { Document } from 'mongoose';

interface IRating extends Document {
  review_id: string;
  user_id: string;
  business_id: string;
  stars: number;
  date: string;
  text: string;
  useful: number;
  funny: number;
  cool: number;
}

export default IRating;
