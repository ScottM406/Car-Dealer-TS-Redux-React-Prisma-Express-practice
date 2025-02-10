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
    res.status(201).json(showingRequest);
    
    await prisma.showingRequestCarsOnLot.create({
      data: {
        showingRequestID: showingRequest.id,
        carsOnLotID
      }
    })
  } catch (e) {
    next (e);
  }
})

module.exports = router