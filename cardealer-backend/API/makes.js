const express = require("express");
const prisma = require("../prisma");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
  const makes = await prisma.make.findMany({
    include: { models: true }
  });
  res.json(makes);
  } catch(e) {
    next(e);
  }
});

module.exports = router