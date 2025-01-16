import express from "express";
import { getCarById, getCaseDocumentByName } from "../controllers/index.js";

const router = express.Router();
router.get("/car");
// fetch("/car/1")
router.get("/car/:id", getCarById);
// Get document from a case
router.get("/case/:caseId/document/:documentName", getCaseDocumentByName);

export default router;
