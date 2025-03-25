import mongoose from "mongoose";

type Item = {
  name: string;
  price: number;
  owner: string;
};

const ItemSchema = new mongoose.Schema({
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

export default mongoose.model<Item>("Item", ItemSchema);
