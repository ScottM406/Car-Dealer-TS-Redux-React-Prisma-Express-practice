const prisma = require("../prisma")
const makes = require("./seed-data/makes-and-models.ts");

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

const testCars = [
  {
    headline: "Test ZR1 Corvette",
    description: "This is a test car for use in site development.",
    image: "https://www.motortrend.com/files/66aab54c164f580008b698e7/2025chevroletcorvetteblackconvert.jpg?w=768&width=768&q=75&format=webp",
    year: 2025,
    miles: 4,
    drivetrain: "RWD",
    engine: "6.2L V8",
    color: "Black",
    MPG_city: 16,
    MPG_highway: 25,
    makeName: allMakes[2].name,
    modelName: allModels[56].name,
    features: [
      "ZR1 Package",
      "Advanced Infotainment System",
      "Wireless Smartphone Charging",
      "Heads-Up Display",
      "Premium Bose Sound System",
      "Surround-View Camera",
      "Smart Keyless Entry",
      "Customizable Ambient Lighting",
      "Heated and Ventilated Seats",
      "Leather Upholstery",
      "Carbon Fiber Interior Trim",
      "Memory Seat Settings",
      "Dual-Zone Climate Control",
      "Automatic Dimming Rearview Mirror",
      "Enhanced Navigation System",
      "Adaptive Cruise Control",
      "Remote Start",
      "Digital Instrument Cluster",
      "Rear Cross Traffic Alert",
      "Apple CarPlay and Android Auto",
      "Wi-Fi Hotspot",
      "Blind Spot Monitoring",
      "Advanced Parking Assist",
      "19-inch Alloy Wheels",
      "Premium Paint Options",
      "LED Headlights and Taillights",
      "Blackout Appearance Package"
    ],
    price: 194999 
  },
  {
    headline: "Test Challenger Hellcat",
    description: "This is a test car for use in site development.",
    image: "https://bringatrailer.com/wp-content/uploads/2023/02/2023_dodge_challenger-srt-hellcat-widebody-jailbreak-redeye-last-call_A-3-62209-scaled.jpg",
    year: 2023,
    miles: 12588,
    drivetrain: "RWD",
    engine: "Supercharged 6.2L V8",
    color: "Red",
    MPG_city: 13,
    MPG_highway: 22,
    makeName: allMakes[4].name,
    modelName: allModels[127].name,
    features: [
      "SRT Hellcat Package",
      "Advanced Infotainment System",
      "Heads-Up Display",
      "Smart Keyless Entry",
      "Customizable Ambient Lighting",
      "Heated and Ventilated Seats",
      "Leather Upholstery",
      "Memory Seat Settings",
      "Dual-Zone Climate Control",
      "Automatic Dimming Rearview Mirror",
      "Enhanced Navigation System",
      "Adaptive Cruise Control",
      "Remote Start",
      "Digital Instrument Cluster",
      "Rear Cross Traffic Alert",
      "Apple CarPlay and Android Auto",
      "Wi-Fi Hotspot",
      "Blind Spot Monitoring",
      "Advanced Parking Assist",
      "LED Headlights and Taillights",
    ],
    price: 92999 
  }
]

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