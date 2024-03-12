import { Document } from "mongoose";

interface IBusiness extends Document {
  business_id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  latitude: number;
  longitude: number;
  stars: number;
  review_count: number;
  is_open: number;
  attributes: Record<string, any>;
  categories: string[];
  hours: Record<string, string>;
}

export default IBusiness;
