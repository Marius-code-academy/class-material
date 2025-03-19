import express from "express";
import { createTask, getTasks, updateTask } from "../controllers/taskControllers.js";
import taskValidation from "../middleware/taskValidation.js";
import { idParamValidation } from "../middleware/idParamValidation.js";
import { queryIdValidation } from "../middleware/queryIdValidation.js";

const router = express.Router();

router.get("/task", queryIdValidation, getTasks);

router.post("/task", taskValidation, createTask);

router.put("/task/:id", idParamValidation, taskValidation, updateTask);

export default router;
