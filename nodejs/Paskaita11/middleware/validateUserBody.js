import joi from "joi";

const userSchema = joi.object({
  name: joi.string().min(3).max(30).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  age: joi.number().integer().min(1).max(120).required(),
});

export function validateUserBody(req, res, next) {
  const { error } = userSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.message });
  } else {
    next();
  }
}
