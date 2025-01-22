import express from "express";
import { createNewCar, deleteCarById, getAllCars, getCarById, updateCarById } from "../controllers/carControllers.js";

const router = express.Router();

// Gets all cars
router.get("/cars", getAllCars);

// Gets a car by it's id
router.get("/cars/:id", getCarById);

// Creates a new car
router.post("/cars", createNewCar);

// Updates a car by its id
router.put("/cars/:id", updateCarById);

// Deletes a car by its id
router.delete("/cars/:id", deleteCarById);

export default router;
