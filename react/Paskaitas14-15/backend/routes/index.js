import express from "express";
import taskRouter from "./taskRouter.js";
import columnRouter from "./columnRouter.js";

const router = express.Router();

router.use(columnRouter);
router.use(taskRouter);

export default router;
