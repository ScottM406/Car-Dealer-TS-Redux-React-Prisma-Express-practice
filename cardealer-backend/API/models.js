const express = require ("express");
const prisma = require("../prisma");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { name, makeName } = req.body;
  try {
    const newMaodel = await prisma.model.create({
      data: {
        name: name,
        makeName: makeName
      }
    });
    res.status(201).json(newMaodel);
  } catch(e) {
    next(e);
  }
});

module.exports = router;