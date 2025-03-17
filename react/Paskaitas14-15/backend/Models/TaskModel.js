import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  estimation: {
    type: Number,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Task", taskSchema);
