const express = require("express")
const prisma = require("../prisma")
const { authenticate } = require("./auth")

const router = express.Router();

router.get("/", authenticate, async (req, res, next) => {
  try {
  const showingRequests = await prisma.showingRequest.findMany({
    include: {
      car: true
    }
  });  
  res.json(showingRequests);
  } catch (e) {
    next (e);
  }
});

router.post("/", async (req, res, next) => {
  const { firstName, lastName, phoneNumber, emailAddress, desiredTime, testDriveRequested, carsOnLotID } = req.body;
  try {
    const showingRequest = await prisma.showingRequest.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        desiredTime,
        testDriveRequested
      },
    });
    
    const showingRequestCarsOnLot = await prisma.showingRequestCarsOnLot.create({
      data: {
        showingRequestID: showingRequest.id,
        carsOnLotID
      }
    });

    res.status(201).json({ showingRequest, showingRequestCarsOnLot });
  } catch (e) {
    next (e);
  }
});

router.put("/:id", authenticate, async (req, res, next) => {
  const { id } = req.params;
  const { showingConfirmed, actualTime, userID } = req.body;

  try {
    const showingRequest = await prisma.showingRequest.update({
      where: {
        id: Number(id),
      },
      data: {
        showingConfirmed: showingConfirmed,
        actualTime: actualTime,
        userID: userID
      }
    });

    res.json(showingRequest);
  } catch (e) {
    next (e);
  }
});

module.exports = router