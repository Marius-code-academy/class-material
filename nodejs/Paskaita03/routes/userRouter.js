import express from "express";
import { createUser, deleteAllUsers, getUsers, updateAllUsersAges } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/users", getUsers);

router.post("/users", createUser);

router.put("/users", updateAllUsersAges);

router.delete("/users", deleteAllUsers);

export default router;
