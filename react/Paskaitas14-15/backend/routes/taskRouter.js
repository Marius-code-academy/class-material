import express from "express";
import { createTask, getTasks } from "../controllers/taskControllers.js";
import taskValidation from "../middleware/TaskValidation.js";

const router = express.Router();

router.get("/task", getTasks);

router.post("/task", taskValidation, createTask);

export default router;
