const express = require("express");
const prisma = require("../prisma");

const router = express.Router();

router.post("/", (req, res, next) => {
  const { userID, cars } = req.body;
  try{
    watchlist = prisma.watchlist.create({
      data: {
        userID: userID,
        cars: cars,
      }
    })
  } catch(e) {
    next(e);
  }
});