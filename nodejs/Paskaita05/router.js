import express from "express";
import { getStuff } from "./controllers.js";

const router = express.Router();

router.get("/", getStuff);

export default router;
