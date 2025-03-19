import express from "express";
import { createColumn, deleteColumnById, getColumns } from "../controllers/columnControllers.js";
import { columnValidation } from "../middleware/ColumnValidation.js";
import { idParamValidation } from "../middleware/idParamValidation.js";

const router = express.Router();

router.get("/column", getColumns);

router.post("/column", columnValidation, createColumn);

router.delete("/column/:id", idParamValidation, deleteColumnById);

export default router;
