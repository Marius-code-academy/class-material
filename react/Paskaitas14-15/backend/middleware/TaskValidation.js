import joi from "joi";
import { validateMongoDbId } from "./common.js";

const taskValidation = (req, res, next) => {
  const taskSchema = joi.object({
    title: joi.string().min(5).max(150).required(),
    description: joi.string().max(1000),
    estimation: joi.number().min(0),
    column: joi.custom(validateMongoDbId),
  });

  const { error } = taskSchema.validate(req.body);

  if (error) {
    res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
};

export default taskValidation;
