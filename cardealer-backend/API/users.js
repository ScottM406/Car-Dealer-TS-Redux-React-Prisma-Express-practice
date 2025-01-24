const express = require("express");
const prisma = require("../prisma");
const { authenticate } = require("./auth");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const user = await prisma.user.findMany();
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", authenticate, async (req, res, next) => {
  const { id } = req.params;
  try {
    if (req.user.id !== Number(id)) {
      return res.status(403).json("You are forbidden from accessing this.")
    }
    const user = await prisma.user.findUniqueOrThrow({
      where: { id: Number(id) },
      include: { watchlist: {
        include: { cars: true }
      }}
    });
    res.json(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;