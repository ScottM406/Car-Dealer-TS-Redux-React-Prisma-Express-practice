const express = require("express");
const prisma = require("../prisma");
const router = express.Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const cars = await prisma.carsOnLot.findMany();
    res.json(cars);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const car = await prisma.carsOnLot.findUniqueOrThrow({
      where: {id: Number(id)}
    })
    res.json(car);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const { headline, description, image, year, miles, drivetrain, engine, color, MPG_city, MPG_highway, modelId, features, price } = req.body;
  try {
    const newCar = await prisma.carsOnLot.create({
      data: {
        headline,
        description,
        image,
        year,
        miles,
        drivetrain,
        engine,
        color,
        MPG_city,
        MPG_highway,
        modelId,
        features,
        price
      }
    });
    res.status(201).json(newCar);
  } catch (e) {
    next(e);
  }
});