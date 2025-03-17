import joi from "joi";

export async function columnValidation(req, res, next) {
  const schema = joi.object({
    title: joi.string().min(3).max(30).required(),
    order: joi.number().min(0).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
}
