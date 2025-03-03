import joi from "joi";
import mongoose from "mongoose";

const validateMongoDbId = (value) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    throw new Error("Invalid user Id");
  }
  return value;
};

const userIdSchema = joi.object({
  id: joi.string().custom(validateMongoDbId, "Validating user Id").message({ "any.custom": "Invalid User id new" }).required(),
});

export function validateUserId(req, res, next) {
  const { error } = userIdSchema.validate(req.params);
  if (error) {
    res.status(400).json({ message: error.message });
  } else {
    next();
  }
}
