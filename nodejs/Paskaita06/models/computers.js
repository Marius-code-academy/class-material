import mongoose from "mongoose";

const computerSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
});

export default mongoose.model("computers", computerSchema);
