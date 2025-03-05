const express = require("express");
const prisma = require("../prisma");
const { authenticate } = require("./auth");

const router = express.Router();

router.get("/:id", authenticate, async (req, res, next) => {
  const { id } = req.params;
  try {
    if (req.user.id !== Number(id)) {
      return res.status(403).json("You are forbidden from accessing this.")
    }
    if (req.user.isEmployee === true) {
      const user = await prisma.user.findUniqueOrThrow({
        where: { id: Number(id) },
        include: { 
          watchlist: {
            include: { cars: true }
            },
          employeeAppointments: true
        },
      });
      res.json(user);
    } else {
      const user = await prisma.user.findUniqueOrThrow({
        where: { id: Number(id) },
        include: { watchlist: {
          include: { cars: true }
        }}
      });
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

//The route below gets all employees.
router.get("/", authenticate, async (req, res, next) => {
  try {
    if (req.user.isSuperUser !== true) {
      return res.status(403).json("This is only available to Admins.")
    }
    const employees = await prisma.user.findMany({
      where:  { isEmployee: true },
    });
    console.log(employees)
    res.json(employees)
  } catch (e) {
    next(e);
  }
});

module.exports = router;