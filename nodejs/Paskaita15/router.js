import express from "express";
import { loginUser, registerUser } from "./controllers.js";
import { validateJwtMiddleware } from "./jwtValidationMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/validateToken", validateJwtMiddleware, (req, res) => {
  res.json({ message: "valid" });
});

router.get("/test", validateJwtMiddleware, (req, res) => {
  console.log(req.user);

  res.json({ message: "test" });
});

export default router;
