const prisma = require("../prisma")
const makes = require("./seed-data/makes-and-models.js");
const testCars = require("./seed-data/test-cars.js")

const seed = async () => {

  for (const makeData of makes) {
    const { models, ...makeDetails } = makeData;
    await prisma.make.create({
      data: {
        ...makeDetails,
        models: {
          create:models.map((model) => ({
            ...model
          }))
        }
      }
    });
  }

const allMakes = await prisma.make.findMany();  
const allModels = await prisma.model.findMany();

  for (const carData of testCars) {
    await prisma.carsOnLot.create({
      data: carData
    });
  }

};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });