import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const { JWT_SECRET } = process.env;

export function validateJwtMiddleware(req, res, next) {
  const cookie = req.cookies;
  console.log("cookie", cookie);

  if (!authorization) {
    return res.status(401).json({ message: "unauthorized" });
  }

  const token = authorization.split(" ")[1];

  try {
    const user = jwt.verify(token, JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "unauthorized" });
  }
}
