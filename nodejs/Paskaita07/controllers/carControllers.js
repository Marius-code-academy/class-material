import CarModel from "../models/CarModel.js";
import mongoose from "mongoose";

export async function getAllCars(req, res) {
  try {
    const cars = await CarModel.find({}, { __v: 0 });

    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getCarById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const car = await CarModel.findById(id, { __v: 0 });

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.json(car);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function createNewCar(req, res) {
  const { brand, model, year, price, flooded } = req.body;

  try {
    const newCar = new CarModel({
      brand,
      model,
      year,
      price,
      flooded,
    });

    const carResponse = await newCar.save();

    res.json(carResponse);
  } catch (error) {
    if (error.errors.model.name === "ValidatorError") {
      res.status(400).json({ error: "Car validation failed" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export async function updateCarById(req, res) {
  const { id } = req.params;
  const { brand, model, year, price, flooded } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const car = await CarModel.findById(id);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    car.brand = brand;
    car.model = model;
    car.year = year;
    car.price = price;
    car.flooded = flooded;

    await car.save();

    res.json(car);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteCarById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const deletedCar = await CarModel.findByIdAndDelete(id);

    if (!deletedCar) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.json(deletedCar);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
