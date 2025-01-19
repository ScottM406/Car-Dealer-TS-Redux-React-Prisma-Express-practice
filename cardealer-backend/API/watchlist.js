const express = require("express");
const prisma = require("../prisma");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { userID, carID } = req.body;
  try {

    watchlist = await prisma.watchlist.create({
      data: {
        userID: userID,
        cars: {
          connect: [{ id: carID }]
        }
      }
    });
    res.status(201).json(watchlist);
  } catch(e) {
    next(e);
  }
});

module.exports = router;