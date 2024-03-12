import { Document } from "mongoose";

interface ICheckin extends Document {
  business_id: string;
  date: string[];
}

export default ICheckin;
