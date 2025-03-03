import express from "express";
import { getUsers, updateUserById } from "../controllers/userController.js";
import { validateUserBody } from "../middleware/validateUserBody.js";
import { validateUserId } from "../middleware/validateUserId.js";

const router = express.Router();

router.post("/user", validateUserBody, getUsers);

router.put("/user/:id", validateUserId, validateUserBody, updateUserById);

export default router;
