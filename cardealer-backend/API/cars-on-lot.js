const express = require("express");
const multer = require('multer');
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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
});

const upload = multer({ storage });

router.post("/", upload.array('images', 12), async (req, res, next) => {
  const { headline, description, year, miles, drivetrain, engine, color, MPG_city, MPG_highway, makeName, modelName, features, price } = req.body;
  const images = req.files.map(file => file.path);
  try {
    const newCar = await prisma.carsOnLot.create({
      data: {
        headline,
        description,
        images,
        year: Number(year),
        miles: Number(miles),
        drivetrain,
        engine,
        color,
        MPG_city: Number(MPG_city),
        MPG_highway: Number(MPG_highway),
        makeName,
        modelName,
        features: features.split(",").map(feature => feature.trim()),
        price: Number(price)
      }
    });
    res.status(201).json(newCar);
  } catch (e) {
    next(e);
  }
});