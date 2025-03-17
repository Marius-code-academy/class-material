import joi from "joi";
import mongoose from "mongoose";

const taskValidation = (req, res, next) => {
  const taskSchema = joi.object({
    title: joi.string().min(5).max(150).required(),
    description: joi.string().max(1000),
    estimation: joi.number().min(0),
    column: joi.custom((value) => {
      if (mongoose.Types.ObjectId.isValid(value)) {
        return value;
      } else {
        throw new Error("Invalid column id");
      }
    }),
  });

  const { error } = taskSchema.validate(req.body);

  if (error) {
    res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
};

export default taskValidation;
