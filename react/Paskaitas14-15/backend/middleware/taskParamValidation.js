import joi from "joi";
import { validateMongoDbId } from "./common.js";

export function taskParamValidation(req, res, next) {
  const schema = joi.object({
    id: joi.string().custom(validateMongoDbId).required(),
  });

  const { error } = schema.validate(req.params);

  if (error) {
    res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
}
