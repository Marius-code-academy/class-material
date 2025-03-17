import express from "express";
import { createColumn, getColumns } from "../controllers/columnControllers.js";
import { columnValidation } from "../middleware/ColumnValidation.js";

const router = express.Router();

router.get("/column", getColumns);

router.post("/column", columnValidation, createColumn);

export default router;
