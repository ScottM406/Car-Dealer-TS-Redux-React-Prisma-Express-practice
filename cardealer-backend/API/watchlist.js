const express = require("express");
const prisma = require("../prisma");

const router = express.Router();

router.post("/", (req, res, next) => {
  const { userID, carID } = req.body;
  try{
    watchlist = prisma.watchlist.create({
      data: {
        userID: userID,
        cars: {
          data: {
            id: carID
          }
        }
      }
    })
  } catch(e) {
    next(e);
  }
});

module.exports = router;