import express from "express";
import { createTask, getTasks } from "../controllers/taskControllers.js";
import taskValidation from "../middleware/taskValidation.js";

const router = express.Router();

router.get("/task", getTasks);

router.post("/task", taskValidation, createTask);

export default router;
