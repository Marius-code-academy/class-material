import express from "express";
import { createNewCar, deleteCarById, getCarById, getCars, updateCarById } from "./controllers.js";

const router = express.Router();

router.get("/cars", getCars);

router.get("/cars/:id", getCarById);

router.post("/cars", createNewCar);

router.put("/cars/:id", updateCarById);

router.delete("/cars/:id", deleteCarById);

export default router;
