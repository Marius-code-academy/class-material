import express from "express";
import { createNewUser, getAllUsers, getAllUsersPosts } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/user", createNewUser);
router.get("/user", getAllUsers);
router.get("/user/:id/posts", getAllUsersPosts);

export default router;
