const express = require("express");
const prisma = require("../prisma");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const user = await prisma.user.findMany();
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.get("/id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: { id: Number(id) }
    });
    res.json(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;