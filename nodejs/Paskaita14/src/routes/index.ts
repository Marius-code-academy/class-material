import express from "express";

const router = express.Router();

router.get("/item");

router.post("/item/:id");

export default router;
