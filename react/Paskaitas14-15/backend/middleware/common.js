import mongoose from "mongoose";

export const validateMongoDbId = (value) => {
  if (mongoose.Types.ObjectId.isValid(value)) {
    return value;
  } else {
    throw new Error("Invalid column id");
  }
};
