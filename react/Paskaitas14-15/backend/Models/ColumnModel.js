import mongoose from "mongoose";

const ColumnSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Column", ColumnSchema);
