const express = require("express");
const prisma = require("../prisma");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { userID, carID } = req.body;
  try {

    const watchlist = await prisma.watchlist.create({
      data: {
        userID: userID,
      }
    });

    await prisma.watchlistCarsOnLot.create({
      data: {
        watchlistID: watchlist.id,
        carsOnLotID: carID
      }
    })
    res.status(201).json(watchlist);
  } catch(e) {
    next(e);
  }
});

router.post("/:id", async (req,res,next) => {
  const { id } = req.params;
  const { carID } = req.body;
  try {
    const addedCar = await prisma.watchlistCarsOnLot.create({
      data: {
        watchlistID: Number(id),
        carsOnLotID: carID
      }
    });
    res.status(201).json(addedCar);
  } catch(e) {
    next(e);
  }
})
module.exports = router;