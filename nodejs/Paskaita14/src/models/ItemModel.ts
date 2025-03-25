import mongoose, { Document } from "mongoose";

// Define the TypeScript type for the Item document
type Item = {
  name: string;
  price: number;
  owner: string;
};

// Extend the Mongoose Document type with the Item type
export type ItemDocument = Document & Item;

const ItemSchema = new mongoose.Schema<ItemDocument>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ItemDocument>("Item", ItemSchema);
