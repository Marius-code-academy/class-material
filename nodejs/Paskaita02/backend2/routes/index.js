import express from "express";
import { helloWorldController } from "../controllers/index.js";

const router = express.Router();

router.get("/", helloWorldController);

export default router;
