import express from "express";
import { createNewComputer, getComputers } from "./controllers.js";

const router = express.Router();

router.get("/computers", getComputers);
router.post("/computers", createNewComputer);

export default router;
